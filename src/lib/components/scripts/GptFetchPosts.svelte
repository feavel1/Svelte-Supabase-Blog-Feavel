<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabaseClient';
	import CardPost from '$lib/components/ui/CardPost.svelte';
	import { fade, fly } from 'svelte/transition';

	let posts: any = [];
	let error: unknown = null;
	let limit = 10;
	let offset = 0;
	let hasMore = true;

	let observer;

	onMount(async () => {
		try {
			const { data } = await supabase
				.from('posts')
				.select(`content, created_at,email, id, title, likes (likes)`)
				.order('created_at', { ascending: false })
				.range(offset, offset + limit);

			posts = data;
			offset += limit;
		} catch (e) {
			error = e;
		}

		observer = new IntersectionObserver(handleIntersect);
		const loadingIndicator = document.getElementById('loading-indicator');
		observer.observe(loadingIndicator!);
	});

	function loadMore() {
		supabase
			.from('posts')
			.select(`content, created_at,email, id, title, likes (likes)`)
			.order('created_at', { ascending: false })
			.range(offset, offset + limit)
			.then(({ data }) => {
				if (!data?.length) {
					hasMore = false;
					return;
				}
				posts = [...posts, ...data];
				offset += limit;
			});
	}

	function handleIntersect(entries: { isIntersecting: any }[]) {
		if (entries[0].isIntersecting) {
			loadMore();
		}
	}
</script>

{#if error}
	<p>An error occurred: {error}</p>
{:else}
	<div>
		{#each posts as post}
			<CardPost {...post} />
		{/each}
	</div>

	{#if hasMore}
		<div
			in:fly={{ y: -50, duration: 1000 }}
			id="loading-indicator"
			class="mb-5 flex rounded-sm bg-secondary text-secondary-content"
		>
			<div class="card-body">
				<div class="flex flex-col gap-1">
					<h1 class="w-44 truncate text-2xl font-semibold">加载中...</h1>
					<!-- <p class="text-clip">{content}</p> -->
					<div class="badge">作者: 加载中...</div>
					<div class="badge-primary badge">创建：加载中...</div>
				</div>
				<div class="card-actions mt-10 justify-between">
					<button disabled class="btn-primary btn"> 加载中...赞❤️ </button>
					<button class="btn-primary btn"> 阅读文章 </button>
				</div>
			</div>
		</div>
	{:else}
		<p transition:fade>暂时没有更多啦.</p>
	{/if}
{/if}
