<script>
	import { onDestroy, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import InView from '../components/ui/InView.svelte';
	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="flex w-full max-w-6xl flex-col">
		<div class="min-h-screen flex-col content-center justify-center">
			<InView let:isVisible>
				{#if isVisible}
					<h1 transition:fly={{ x: -400, duration: 2000 }} class="em text-6xl font-bold">
						欢迎用户来到
					</h1>
					<p transition:fly={{ x: -800, duration: 3000 }} class="text-3xl font-black">
						Feavel的音乐/哲学部落
					</p>
					<p transition:fly={{ x: 800, duration: 4000 }} class="text-secondary-content">
						一个能学习的地方
					</p>
				{/if}
			</InView>
		</div>

		<div class="min-h-screen w-full content-center justify-center">
			<InView let:isVisible>
				{#if isVisible}
					<h1 transition:fly={{ x: -400, duration: 2000 }} class="em text-6xl font-bold">
						你是否在学习音乐方面有困扰？
					</h1>
					<p transition:fly={{ x: -800, duration: 3000 }} class="text-3xl font-black">
						不知道从哪开始或者
					</p>
					<p transition:fly={{ x: 800, duration: 4000 }} class="text-secondary-content">
						不知道在哪找到相关的教程？
					</p>
				{/if}
			</InView>
		</div>
	</div>
{/if}
