import { OPENAI_KEY } from '$env/static/private';
import type { CreateChatCompletionRequest, ChatCompletionRequestMessage } from 'openai';
import type { RequestHandler } from './$types';
import { getTokens } from '$lib/tokenizer';
import { json } from '@sveltejs/kit';
// import type { Config } from '@sveltejs/adapter-auto';

export const config = {
	runtime: 'edge'
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		// Check if the OPENAI_KEY environment variable is set
		if (!OPENAI_KEY) {
			throw new Error('OPENAI_KEY env variable not set');
		}

		// Parse the request data
		const requestData = await request.json();

		// Check if the request data is present
		if (!requestData) {
			throw new Error('No request data');
		}

		// Get the messages from the request data
		const reqMessages: ChatCompletionRequestMessage[] = requestData.messages;

		// Check if the messages are present
		if (!reqMessages) {
			throw new Error('no messages provided');
		}

		// Count the number of tokens in the messages
		let tokenCount = 0;
		reqMessages.forEach((msg) => {
			const tokens = getTokens(msg.content);
			tokenCount += tokens;
		});

		// Check if the query has been flagged by OpenAI
		const moderationRes = await fetch('https://api.openai.com/v1/moderations', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_KEY}`
			},
			method: 'POST',
			body: JSON.stringify({
				input: reqMessages[reqMessages.length - 1].content
			})
		});

		const moderationData = await moderationRes.json();
		const [results] = moderationData.results;
		if (results.flagged) {
			throw new Error('Query flagged by openai');
		}

		// Check if the query has too many tokens
		const prompt = '';
		tokenCount += getTokens(prompt);
		if (tokenCount >= 1500) {
			throw new Error('Query too large');
		}

		// Prepare the messages for chat completion
		const messages: ChatCompletionRequestMessage[] = [
			{ role: 'system', content: prompt },
			...reqMessages
		];

		// Create the chat completion request options
		const chatRequestOpts: CreateChatCompletionRequest = {
			model: 'gpt-3.5-turbo',
			messages,
			temperature: 0.9,
			stream: true
		};

		// Send the chat completion request to OpenAI
		const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
			headers: {
				Authorization: `Bearer ${OPENAI_KEY}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(chatRequestOpts)
		});

		// Handle any errors that may occur during the chat completion request
		if (!chatResponse.ok) {
			const err = await chatResponse.json();
			throw new Error(err);
		}

		// Return the chat response
		return new Response(chatResponse.body, {
			headers: {
				'Content-Type': 'text/event-stream'
			}
		});
	} catch (err) {
		// console.error(err);
		return json({ error: 'There was an error processing your request' }, { status: 500 });
	}
};
