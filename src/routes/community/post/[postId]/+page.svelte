<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { page } from '$app/stores';
	import CommentLike from '$lib/components/ui/badges/CommentLike.svelte';
	import Time from 'svelte-time/src/Time.svelte';

	export let data;

	let post = data.post,
		comments: any = data.comments,
		content = '',
		user = $page.data.session && $page.data.session.user;

	const submitComment = async () => {
		try {
			if (!user) {
				alert('监测到您未登录.');
				return;
			}
			const { data: newComment, error } = await supabase
				.from('comments')
				.insert({ post_id: post.id, user_id: user.id, content, email: user.email! })
				.select(`*, comment_likes (user_id)`)
				.single();
			if (error) throw error;

			comments = [...comments, newComment];
			// location.reload();
			content = '';
		} catch (error) {
			console.error(error);
			alert('添加评论时出错啦.');
		}
	};

	async function handelDeleteComment(comment: number) {
		const { data, error } = await supabase.from('comments').delete().eq('id', comment);
		if (error) throw new Error(error.message);
		location.reload();
		return data;
	}
</script>

<div class="w-full max-w-3xl">
	{#if post}
		<h1 class="my-0 text-5xl font-extrabold md:text-6xl">{post.title}</h1>
		<span class="text-sm">作者：{post.email}</span>
		<Time relative class="text-xs opacity-50" timestamp={post.created_at} />
		<div class="divider" />
		<div class="prose-lg prose md:prose-xl first-letter:text-cyan-300">{@html post.content}</div>

		<!-- 评论区 -->
		{#if user}
			<div class="divider mb-0">评论💬</div>
			<form class="form-control mb-5" on:submit|preventDefault={submitComment}>
				<label for="content" class="label">
					输入你的评论:
					<button class="btn-xs btn" type="submit">添加评论</button>
				</label>
				<input
					type="text"
					class="px s-2 input-bordered input w-full rounded-lg bg-primary text-primary-content placeholder:text-slate-600"
					id="content"
					bind:value={content}
				/>
			</form>
		{:else}
			<div class="divider">
				<a href="/my-account" class="badge">登录才可以添加评论.</a>
			</div>
		{/if}

		{#if comments?.length === 0}
			<p>暂时没有评论，快添加一个吧.</p>
		{:else}
			{#each comments as comment}
				<div class="chat flex flex-col">
					<div class="chat-header text-xs">By: {comment.email}</div>
					<div class="flex flex-row items-center justify-between gap-3">
						<div class="chat-bubble-secondary w-fit rounded-md px-3 py-1">{comment.content}</div>
						<div>
							{#if comment.email === $page.data.session?.user.email}
								<button
									class="px-2 py-1 text-accent  hover:text-accent-focus "
									on:click={() => handelDeleteComment(comment.id)}
								>
									删除
								</button>
							{/if}
							<CommentLike {comment} {user} />
						</div>
					</div>
					<Time relative class="text-xs opacity-50" timestamp={comment.created_at} />
				</div>
			{/each}
		{/if}
	{:else}
		<p>没有找到此帖子.</p>
	{/if}
</div>
