<script lang="ts">
	import List from '$lib/components/scripts/List.svelte';
	import data from '$lib/components/scripts/fetchPostsData';
</script>

<svelte:head>
	<title>社区 - Feavel's Camp</title>
	<meta name="description" content="Community" />
</svelte:head>

<div class="flex w-full max-w-3xl flex-col gap-3">
	<h1 class="text-6xl">欢迎来到社区📌🗂️</h1>

	<div class="divider" />

	<h2 class="text-3xl">用户创建的帖子：</h2>

	<List {...$data} on:loadMore={data.fetchMore} />
</div>
