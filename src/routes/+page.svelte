<script>
	import PageBlock from '../components/ui/PageBlock.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import InView from '../components/ui/InView.svelte';

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	if (browser && $page.data.session) {
		goto('/home');
	}

	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<div class="flex w-full max-w-5xl flex-col content-center ">
		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold">标题</h1>
					<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">这里是。。。</p>
					<p in:fly={{ x: 800, duration: 1500 }} class="">一段文字简单描述这里</p>
					<div in:fly={{ y: 800, duration: 2000 }} class="mt-64">⬇️下滑</div>
				{/if}
			</InView>
		</PageBlock>

		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold">
						你是否在（提问）？
					</h1>
					<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">
						不知道从哪开始或者...
					</p>
					<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary-content">
						不知道在哪找到相关的（。。。）？
					</p>
				{/if}
			</InView>
		</PageBlock>

		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold text-error">
						对不起，
						<br />
						有坏消息
					</h1>
					<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">吧啦吧啦一串坏消息</p>
					<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary-content">
						再去铺垫一段坏消息
					</p>
				{/if}
			</InView>
		</PageBlock>

		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<h1 in:fly={{ x: -400, duration: 900 }} class="em text-6xl font-bold text-info">
						那我们应该怎么办呢？
					</h1>
					<p in:fly={{ x: -800, duration: 1200 }} class="text-3xl font-black">
						首先我们得学会提问...
					</p>
					<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary-content">
						提问：“我的问题在哪？”
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
					<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary-content">开始学习吧</p>
					<div in:fly={{ x: -400, duration: 900 }} class="felx-col mt-5 flex gap-3 ">
						<a href="/home"><button class="btn text-accent">进入主页</button></a>
						<a href="/my-account"><button class="btn text-info">登录账号</button></a>
					</div>
				{/if}
			</InView>
		</PageBlock>
	</div>
{/if}
