<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import CardPostUser from '../CardPostUser.svelte';
	export let id: number, title: string, likes;

	let postLike: number;

	if (likes === null) {
		postLike = 0;
		async function createLike() {
			const { error } = await supabase.from('likes').insert({ likes: postLike, id: id });
			if (error) throw new Error(error.message);
		}
		createLike();
	} else {
		postLike = likes.likes;
	}

	function addLike() {
		async function addLike() {
			const { error } = await supabase.from('likes').update({ likes: postLike }).eq('id', id);
			if (error) throw new Error(error.message);
		}
		postLike += 1;
		addLike();
	}

	async function fetchComments() {
		let { data, error } = await supabase.from('comments').select('*').eq('post_id', id);
		if (error) throw new Error(error.message);
		return data!;
	}

	async function deletePost() {
		const { data, error } = await supabase.from('posts').delete().eq('id', id);
		if (error) throw new Error(error.message);
		location.reload();
		return data;
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<CardPostUser>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<!-- <p class="truncate">{content}</p> -->
		<div class="card-actions">
			<button on:click={addLike} class="btn-primary btn">{postLike}个赞❤️</button>
			<a href="/community/post/edit/{id}"><button class="btn-primary btn">编辑📑</button></a>
			<div class="dropdown-end dropdown">
				<label tabindex="0" class="btn-warning btn">删除❌</label>
				<ul tabindex="0" class="dropdown-content menu rounded-box bg-base-100 p-2 shadow">
					<li class="bg-error text-error-content" on:click={deletePost}><a>删除</a></li>
					<li class="bg-info text-info-content">取消</li>
				</ul>
			</div>
		</div>

		{#await fetchComments()}
			<div class="divider my-0">加载中...</div>
		{:then data}
			<div class="divider my-0">评论</div>
			{#each data as comment}
				<div class="text-sm">
					用户「{comment.email}」说：
					<div class="rounded-lg bg-neutral p-2 text-neutral-content">{comment.content}</div>
				</div>
			{/each}
		{:catch error}
			<p>在捕捉数据时出了点问题:</p>
			<pre>{error}</pre>
		{/await}
	</div>
</CardPostUser>
