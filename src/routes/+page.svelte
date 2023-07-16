<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PageBlock from '$lib/components/ui/PageBlock.svelte';
	import InView from '$lib/components/ui/InView.svelte';
	import Jellyfish from '$lib/components/ui/spinner/Jellyfish.svelte';

	if (browser && $page.data.session) {
		goto('/home');
	}

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

<svelte:head>
	<title>主页 - Feavel's Camp</title>
	<meta name="description" content="Feavel's Camp Home Page" />
</svelte:head>

{#if !ready}
	<Jellyfish />
{:else}
	<div class="flex w-full max-w-6xl flex-col content-center">
		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<h1
						in:fly={{ x: 200, duration: 1500 }}
						class="color-gradient-text mb-1 mt-[15vh] text-6xl font-bold tracking-tighter"
					>
						Feavel's Camp - The Place To Learn
					</h1>
					<p in:fly={{ x: -200, duration: 2000 }} class="font-thin">
						欢迎来到 Feavel 的部落, 一个学习 & 交流的网站
					</p>
					<div in:fly={{ x: -200, duration: 3000 }} class="mt-16">
						<a href="/home">
							<button class="btn-accent btn text-accent-content">进入主页</button>
						</a>
						<a href="/my-account">
							<button class="btn-primary btn text-primary-content"> 登录账号 </button>
						</a>
						<div class="mt-4 font-mono tracking-widest text-opacity-10">
							<p>❤️ Made Possible With ❤️</p>
							<p>
								<a href="https://kit.svelte.dev" class="text-orange-400">SvelteKit</a> and
								<a href="https://supabase.com" class="text-green-400">Supabase</a>
							</p>
						</div>
					</div>
					<div in:fly={{ y: 800, duration: 3000 }} class="mt-32">⬇️ 下滑</div>
				{/if}
			</InView>
		</PageBlock>

		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<div class=" pt-[10vh]">
						<div class="">
							<h1 in:fly={{ x: -400, duration: 900 }} class="font-bold tracking-widest">
								💡可能你想学💡
							</h1>
							<h1
								in:fly={{ x: 200, duration: 1500 }}
								class="color-gradient-text-pink mb-1 mt-[10vh] text-4xl font-bold tracking-tighter md:text-6xl"
							>
								音乐 · 编程 · 哲学
							</h1>
							<p in:fly={{ x: 800, duration: 1500 }} class="font-extralight">
								但不知道从哪开始 · 不知道在哪找资料
							</p>
						</div>

						<div
							in:fly={{ x: -400, duration: 900 }}
							class="mt-[15vh] text-4xl tracking-tighter md:text-6xl"
						>
							<h1 class="font-extralight">Sorry, Bad News</h1>
							<p class="cgr font-black">不是所有东西那么好学</p>
						</div>
						<p
							in:fly={{ x: -800, duration: 1200 }}
							class="font-extralight leading-5 tracking-widest"
						>
							音乐语言太复杂<br />
							哲学会失去自己的分析性<br />
							电影越拍越多看不完<br />
							我只知道我啥都不知道🤷
						</p>
					</div>
				{/if}
			</InView>
		</PageBlock>

		<PageBlock>
			<InView let:isVisible>
				{#if isVisible}
					<div class="pb-[20vh] pt-[10vh]">
						<div>
							<h1 in:fly={{ x: -400, duration: 900 }} class="text-xl font-bold tracking-widest">
								那我们应该怎么办呢?
							</h1>
							<p in:fly={{ x: -800, duration: 1200 }} class="font-extralight">~ 首先 ~</p>
							<div
								in:fly={{ x: -400, duration: 900 }}
								class="mt-4 text-4xl tracking-tighter md:text-6xl"
							>
								<p class="font-extralight">我们必须让无聊的东西</p>
								<p class="font-bold">变的有趣</p>
							</div>
							<p in:fly={{ x: 800, duration: 1500 }} class="font-extralight tracking-widest">
								只有通过不断质疑和突破思想的桎梏<br />
								我们才能真正学到东西
							</p>
						</div>
						<div class="mt-[15vh]">
							<h1 in:fly={{ x: -400, duration: 900 }} class="em font-bold text-success">
								- 在这个网站上你可以找到 -
							</h1>
							<p in:fly={{ x: -800, duration: 1200 }} class="">启发 · 鼓励 · 帮助</p>
							<p in:fly={{ x: 800, duration: 1500 }} class="text-secondary">· 开始学习 ·</p>
							<div in:fly={{ x: -200, duration: 3000 }} class="mt-16">
								<a href="/home">
									<button class="btn-accent btn text-accent-content">进入主页</button>
								</a>
								<a href="/my-account">
									<button class="btn-primary btn text-primary-content"> 登录账号 </button>
								</a>
								<div class="mt-4 font-mono tracking-widest text-opacity-10">
									<p>❤️ 主要工具为 ❤️</p>
									<p>
										<a href="https://kit.svelte.dev" class="text-orange-400">Svelte</a> ·
										<a href="https://supabase.com" class="text-green-400">Supabase</a> ·
										<a href="https://mdsvex.com" class="text-blue-400">Markdown</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</InView>
		</PageBlock>
	</div>
{/if}
