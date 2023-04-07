export class OpenAIApi {
	apiKey: any;
	constructor(apiKey: any) {
		this.apiKey = apiKey;
	}

	async ask(prompt: any) {
		const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${this.apiKey}`
			},
			body: JSON.stringify({
				prompt,
				n: 1,
				max_tokens: 150,
				stop: null,
				temperature: 0.5
			})
		});

		if (!response.ok) {
			throw new Error(`OpenAI API request failed: ${response.statusText}`);
		}

		return await response.json();
	}
}
