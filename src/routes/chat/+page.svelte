<script lang="ts">
	import ChatMessage from '$lib/components/ui/ChatMessage.svelte';
	import Jellyfish from '$lib/components/ui/spinner/Jellyfish.svelte';
	import type { ChatCompletionRequestMessage } from 'openai';
	import { SSE } from 'sse.js';
	import { page } from '$app/stores';

	let query: string = '';
	let answer: string = '';
	let loading: boolean = false;
	let chatMessages: ChatCompletionRequestMessage[] = [];
	let scrollToDiv: HTMLDivElement;

	function scrollToBottom() {
		setTimeout(function () {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}, 100);
	}

	const handleSubmit = async () => {
		loading = true;
		chatMessages = [...chatMessages, { role: 'user', content: query }];

		const eventSource = new SSE('chat/api/chat', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ messages: chatMessages })
		});

		query = '';

		eventSource.addEventListener('error', handleError);

		eventSource.addEventListener('message', (e) => {
			scrollToBottom();
			try {
				loading = false;
				if (e.data === '[DONE]') {
					chatMessages = [...chatMessages, { role: 'assistant', content: answer }];
					answer = '';
					return;
				}

				const completionResponse = JSON.parse(e.data);
				const [{ delta }] = completionResponse.choices;

				if (delta.content) {
					answer = (answer ?? '') + delta.content;
				}
			} catch (err) {
				handleError(err);
			}
		});
		eventSource.stream();
		scrollToBottom();
	};

	function handleError<T>(err: T) {
		loading = false;
		query = '';
		answer = '';
		console.error(err);
	}
</script>

{#if loading}
	<Jellyfish />
{/if}
<div class="mx-auto flex w-full max-w-2xl flex-col items-center">
	<div class="flex w-full flex-col gap-2">
		<div>
			<h1 class="my-0 text-2xl font-extrabold md:text-3xl">Feavel 的精神分析助理:</h1>
			<h1 class="text-5xl font-extrabold md:text-6xl">OWL🦉</h1>
			<p class=" text-sm">由 GPT-3.5-turbo 提供</p>
		</div>

		<div class="divider" />

		<div class="flex h-[45vh] w-full flex-col gap-4 overflow-y-auto rounded-md bg-gray-900 p-4">
			<div class="flex flex-col gap-2">
				<ChatMessage
					type="assistant"
					message="你好, 我是Feavel的猫头鹰, 哲学/精神分析助理Owl。你可以问我一些关于哲学和思想的问题。"
				/>

				{#each chatMessages as message}
					<ChatMessage type={message.role} message={message.content} />
				{/each}
				{#if answer}
					<ChatMessage type="assistant" message={answer} />
				{/if}
				{#if loading}
					<ChatMessage type="assistant" message="Loading..." />
				{/if}
			</div>
			<div class="" bind:this={scrollToDiv} />
		</div>
		{#if !$page.data.session}
			<a href="/my-account" class="btn">抱歉，我最近的开放使用到期了。等我有时间续费会通知您。</a>
		{:else}
			<form
				class="flex w-full gap-4 rounded-md bg-gray-900 p-4"
				on:submit|preventDefault={() => handleSubmit()}
			>
				<input type="text" class="input-bordered input w-full" bind:value={query} />
				<button type="submit" class="btn-accent btn"> Send </button>
			</form>
		{/if}
	</div>
</div>
