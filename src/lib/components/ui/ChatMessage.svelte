<script lang="ts">
	import type { ChatCompletionRequestMessageRoleEnum } from 'openai';
	export let type: ChatCompletionRequestMessageRoleEnum;
	export let message: string;
</script>

<div class="chat {type === 'user' ? 'chat-end' : 'chat-start'} justify-end">
	<div class="chat-image avatar">
		<div class="w-10 rounded-full">
			<img
				src="https://ui-avatars.com/api/?name={type === 'user' ? 'Me' : '🦉'}"
				alt="{type} avatar"
			/>
		</div>
	</div>
	<div class="chat-header text-white">
		{type === 'user' ? 'Me' : 'Owl'}
	</div>
	<div
		class="w-fit rounded-md p-2  {type === 'user'
			? 'chat-bubble-primary'
			: 'chat-bubble-secondary'}"
	>
		{message}
	</div>
</div>
