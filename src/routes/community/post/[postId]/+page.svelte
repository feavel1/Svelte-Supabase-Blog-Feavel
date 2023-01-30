<script lang="ts">
	import type { PageData } from './$types';
	import Time from 'svelte-time';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';
	import BackTo from '$lib/components/ui/BackTo.svelte';

	export let data: PageData;

	let inputHint = '',
		comments = data.comments!,
		commentContent: string,
		commentPost = data.post?.id,
		commentEmail = $page.data.session?.user.email,
		commentUserId = $page.data.session?.user.id,
		submitComment = false;

	let commentDisabled = false;

	if ($page.data.session === null) {
		commentDisabled = true;
		inputHint = '请先登录。';
	} else {
		commentDisabled === false;
		inputHint = '评论';
	}

	async function handleCreateComment() {
		const { data, error } = await supabase.from('comments').insert([
			{
				content: commentContent,
				email: commentEmail!,
				post_id: commentPost!,
				user_id: commentUserId!
			}
		]);
		if (error) throw new Error(error.message);
		location.reload();
		return data;
	}
</script>

<div class=" w-full max-w-3xl">
	<BackTo />
	<div class="prose-xl prose">
		<h1 class="mb-2">{data.post?.title}</h1>
		<div class="divider my-0" />
		<span class=" text-sm">作者：{data.post?.email}</span>

		<p class="mt-10 whitespace-pre">{data.post?.content}</p>
	</div>
	<!-- comment section -->
	<div class="divider mb-0">评论区</div>
	<form class="form-control mb-5" on:submit|preventDefault={() => (submitComment = true)}>
		<label for="comment" class="label">
			<span class="label-text" />
			<button
				class="btn-xs btn"
				disabled={commentDisabled}
				on:click={() => (submitComment = false)}
			>
				{#if commentDisabled === true}请先登录{:else}添加评论{/if}
			</button>
		</label>
		<input
			bind:value={commentContent}
			disabled={commentDisabled}
			type="text"
			placeholder={inputHint}
			class="px s-2 input-bordered input w-full rounded-lg bg-primary text-info-content placeholder:text-slate-600"
		/>

		{#if submitComment}
			{#await handleCreateComment()}
				<label for="comment" class="label"><span class="label-text">加载中...</span></label>
			{:then data}
				<label for="comment" class="label">
					<span class="label-text text-success">添加成功!</span>
				</label>
			{:catch error}
				<label for="comment" class="label text-error">
					<span class="label-text">发生错误了</span>
					<span class="label-text ">{error}</span>
				</label>
			{/await}
		{/if}
	</form>
	<div class="flex w-full flex-col">
		{#each comments as comment}
			<div class="chat  flex flex-col">
				<div class="chat-header text-xs">
					By: {comment.email}
				</div>
				<div class="chat-bubble-secondary w-fit rounded-md px-3 py-1">{comment.content}</div>
				<Time relative class="text-xs opacity-50" timestamp={comment.created_at} />
			</div>
		{/each}
	</div>
</div>
