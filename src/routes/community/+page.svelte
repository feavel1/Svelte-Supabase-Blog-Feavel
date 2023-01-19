<script>
	import CardPost from '../../components/ui/CardPost.svelte';
	import { supabase } from '$lib/supabaseClient';

	async function fetchPosts() {
		const { data, error } = await supabase
			.from('posts')
			.select(`*,likes (likes)`)
			.order('created_at', { ascending: false })
			.limit(5);
		if (error) throw new Error(error.message);
		console.log(data);
		return data;
	}
</script>

<svelte:head>
	<title>社区 - Feavel's Camp</title>
	<meta name="description" content="Community" />
</svelte:head>

<div class="flex w-full max-w-3xl flex-col gap-3">
	<h1 class="text-6xl">欢迎来到社区📌🗂️</h1>

	<div class="divider" />

	<h2 class="text-3xl">用户创建的帖子：</h2>

	<div class="grid-cols-1 gap-5 md:grid md:grid-cols-2">
		{#await fetchPosts()}
			<div>Loading...</div>
		{:then data}
			{#each data as post}
				<CardPost {...post} />
			{/each}
		{:catch error}
			<p>Something went wrong while fetching the data:</p>
			<pre>{error}</pre>
		{/await}
	</div>

	<button class="btn-primary btn mx-auto w-fit">加载更多</button>
</div>
