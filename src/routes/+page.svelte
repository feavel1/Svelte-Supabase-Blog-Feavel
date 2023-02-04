<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PageBlock from '../lib/components/ui/PageBlock.svelte';
	import InView from '../lib/components/ui/InView.svelte';

	if (browser && $page.data.session) {
		goto('/home');
	}

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>主页 - Feavel's Camp</title>
	<meta name="description" content="Feavel's Camp Home Page" />
</svelte:head>

<div class="min-h-screen">
	{#if ready}
		<div class="flex w-full max-w-5xl flex-col content-center ">
			<PageBlock>
				<InView let:isVisible>
					{#if isVisible}
						<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold">欢迎来到</h1>
						<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">Feavel 的部落</p>
						<p in:fly={{ x: 800, duration: 1500 }} class="">一个学习&交流的网站</p>
						<div in:fly={{ y: 800, duration: 2000 }} class="mt-64">⬇️ 下滑</div>
					{/if}
				</InView>
			</PageBlock>

			<PageBlock>
				<InView let:isVisible>
					{#if isVisible}
						<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold">可能你想学...</h1>
						<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">
							哲学、电影、 音乐、摄影...
						</p>
						<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary">
							但你不知道从哪开始或者...<br />不知道在哪找到相关的参考与资料？
						</p>
					{/if}
				</InView>
			</PageBlock>

			<PageBlock>
				<InView let:isVisible>
					{#if isVisible}
						<h1 in:fly={{ x: -400, duration: 900 }} class="text-6xl font-bold text-error-content">
							对不起，
							<br />
							我有坏消息
						</h1>
						<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">
							音乐语言太复杂，哲学将会失去自己的分析性，电影越拍越多... <br />看不完...
						</p>
						<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary">我只知道我啥都不知道🤷</p>
					{/if}
				</InView>
			</PageBlock>

			<PageBlock>
				<InView let:isVisible>
					{#if isVisible}
						<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold text-info-content">
							那我们应该怎么办呢？
						</h1>
						<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">
							首先我们得学会提问... <br />“是什么不让我学习或者做一件事情？”
						</p>
						<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary">
							只有通过不断质疑和突破思想的桎梏，我们才能真正学到东西。
						</p>
					{/if}
				</InView>
			</PageBlock>

			<PageBlock>
				<InView let:isVisible>
					{#if isVisible}
						<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold text-success">
							在这个网站上，你可以找到：
						</h1>
						<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">
							启发、鼓励、帮助你的内容
						</p>
						<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary">开始学习吧</p>
						<div in:fly={{ x: -400, duration: 900 }} class="felx-col mt-5 flex gap-3 ">
							<a href="/home"
								><button class="btn-accent btn text-accent-content">进入主页</button></a
							>
							<a href="/my-account">
								<button class="btn-info btn text-info-content"> 登录账号 </button>
							</a>
						</div>
					{/if}
				</InView>
			</PageBlock>
		</div>
	{/if}
</div>
