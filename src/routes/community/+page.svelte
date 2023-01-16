<script>
	import CardPost from '../../components/ui/CardPost.svelte';
	import { supabase } from '$lib/supabaseClient';

	async function fetchPosts() {
		let { data, error } = await supabase
			.from('posts')
			.select('*')
			.order('created_at', { ascending: false })
			.limit(5);
		if (error) throw new Error(error.message);

		data = await Promise.all(
			// @ts-ignore
			data.map(async (post) => {
				const [{ count: likes }, { data: comments }] = await Promise.all([
					await supabase
						.from('likes')
						.select('id', { count: 'estimated', head: true })
						.eq('post', post.id),
					await supabase
						.from('comments')
						.select('*')
						.order('created_at', { ascending: false })
						.eq('post', post.id)
						.limit(3)
				]);
				if (error) throw new Error(error.message);

				return {
					...post,
					likes,
					comments
				};
			})
		);
		return data;
	}

	// console.log(fetchPosts());
</script>

<svelte:head>
	<title>社区 - Feavel's Camp</title>
	<meta name="description" content="Community" />
</svelte:head>

<div class="flex flex-col gap-3">
	<h1 class="text-6xl">欢迎来到社区📌🗂️</h1>

	<div class="divider" />

	<h2 class="text-3xl">用户创建的帖子：</h2>

	<div class="grid-cols-1 gap-5 lg:grid lg:grid-cols-2">
		{#await fetchPosts()}
			<div>Loading...</div>
		{:then data}
			{#each data || [] as post}
				<CardPost {...post} />
			{/each}
		{:catch error}
			<p>Something went wrong while fetching the data:</p>
			<pre>{error}</pre>
		{/await}
	</div>

	<button class="btn-primary btn mx-auto w-fit">加载更多</button>
</div>
