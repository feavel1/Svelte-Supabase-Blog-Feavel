<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';
	import Time from 'svelte-time';

	export let id,
		email,
		title,
		content,
		likes = 0,
		comments = [],
		created_at;

	function addLike() {
		likes += 1;
		async function createLike() {
			const { data, error } = await supabase
				.from('likes')
				.insert({ user: $page.data?.session.user.email, post: id });
			if (error) throw new Error(error.message);
			return { data };
		}
		createLike();
	}

	let commentContent,
		commentPost = id,
		commentEmail = $page.data?.session.user.email;
	let submitComment = false;

	async function handleCreateComment() {
		const { data, error } = await supabase
			.from('comments')
			.insert([{ content: commentContent, email: commentEmail, post: commentPost }]);
		if (error) throw new Error(error.message);
		return data;
	}
</script>

<div
	class="mb-5 flex w-96 rounded-sm bg-info text-info-content shadow-xl transition-all duration-300 hover:rounded-3xl hover:bg-accent hover:text-accent-content"
>
	<div class="card-body">
		<div class="w-80">
			<h2 class="card-title">{title}</h2>
			<p class="truncate">{content}</p>

			<div class="badge">作者: {email}</div>
		</div>
		<div class="card-actions mt-10 justify-between">
			<button class="btn-primary btn" on:click={addLike}>{likes}赞❤️</button>
			<a class="btn-primary btn" href="community/post/{id}"
				>{#if (email = $page.data?.session?.user.email)}编辑文章{:else}阅读文章{/if}</a
			>
		</div>
		<!-- comment section -->
		<div class="divider mb-0">评论区</div>
		<div class="flex w-full flex-col">
			<!-- Comment Form -->
			<form class="form-control mb-5" on:submit|preventDefault={() => (submitComment = true)}>
				<label for="comment" class="label">
					<span class="label-text" />
					<button class="btn-xs btn" on:click={() => (submitComment = false)}>添加评论</button>
				</label>
				<input
					bind:value={commentContent}
					class="px s-2 input-bordered input w-full rounded-lg bg-info text-info-content"
				/>

				{#if submitComment}
					{#await handleCreateComment()}
						<label for="comment" class="label"><span class="label-text">加载中...</span></label>
					{:then data}
						<label for="comment" class="label"
							><span class="label-text text-success">添加成功!</span></label
						>
					{:catch error}
						<label for="comment" class="label text-error">
							<span class="label-text">发生错误了</span>
							<span class="label-text ">{error}</span>
						</label>
					{/await}
				{/if}
			</form>

			{#each comments as comment}
				<div class="chat  flex flex-col">
					<!-- <div class="chat-image avatar">
						<div class="w-10 rounded-full">
							<img src="https://placeimg.com/192/192/people" />
						</div>
					</div> -->
					<div class="chat-header text-xs">
						{comment.email}
					</div>
					<div class="chat-bubble-primary w-fit rounded-md px-2">{comment.content}</div>
					<Time relative class="text-xs opacity-50" timestamp={comment.created_at} />
				</div>
			{/each}
		</div>
	</div>
</div>
