<script lang="ts">
	import BackTo from '$lib/components/ui/BackTo.svelte';
	import { supabase } from '$lib/supabaseClient';
	import type { PageData } from './$types';
	export let data: PageData;

	let title: string,
		content: string = data.post!.content,
		submit = false,
		postId = data.post?.id;

	async function editPost() {
		const { error } = await supabase.from('posts').update({ title, content }).eq('id', postId);
		if (error) throw new Error(error.message);
	}
</script>

<div class="w-full max-w-3xl">
	<BackTo />
	{#if data.session?.user.id !== data.post.post_creator_id}
		<h1>哎呀...小黑客...干嘛呢</h1>
	{:else}
		<h1 class="mb-4 text-6xl">编辑帖子</h1>

		<form on:submit|preventDefault={() => (submit = true)}>
			<label class="label" for="title">帖子标题</label>
			<input
				id="title"
				type="text"
				class="input-bordered input-warning input w-full max-w-xs"
				bind:value={title}
				placeholder={data.post?.title}
			/>

			<label class="label" for="content">帖子内容</label>
			<textarea
				id="content"
				name="content"
				class="textarea-warning textarea h-56 w-full"
				bind:value={content}
				placeholder={data.post?.content}
			/>

			<button disabled={submit} on:click={() => (submit = true)} class="btn-primary btn mt-4"
				>保存编辑</button
			>
		</form>
		{#if submit}
			{#await editPost()}
				<p>发送数据中..</p>
			{:then data}
				<div class="text-success">
					成功编辑帖子！快去
					<a class="link text-primary hover:text-primary-focus" href="/community">查看帖子</a> 吧！
				</div>
			{:catch error}
				<p>抱歉，好像出错了:</p>
				<pre>{error}</pre>
			{/await}
		{/if}
	{/if}
</div>
