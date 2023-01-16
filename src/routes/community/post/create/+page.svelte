<script>
	// @ts-nocheck

	import BackTo from '../../../../components/ui/BackTo.svelte';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';

	let submit = false;
	let postTitle, postContent;
	let postEmail = $page.data.session.user.email;

	async function handleCreatePost() {
		const { data, error } = await supabase
			.from('posts')
			.insert([{ title: postTitle, content: postContent, email: postEmail }]);
		if (error) throw new Error(error.message);
		return data;
	}
</script>

<div class="w-full max-w-3xl">
	<BackTo />
	<h1 class="mb-4 text-6xl">创建帖子</h1>
	<form class="form-control" on:submit|preventDefault={() => (submit = true)}>
		<div>
			<label class="label" for="email">帖子标题</label>
			<input bind:value={postTitle} class="input-bordered input-accent input w-full max-w-xs" />
		</div>
		<div>
			<label class="label" for="content">帖子内容</label>
			<textarea
				bind:value={postContent}
				class="textarea-accent textarea h-56 w-full"
				placeholder="# 这里可以输入你想发布的内容,请编写"
			/>
		</div>
		<button disabled={submit} type="submit" class="btn" on:click={() => (submit = false)}
			>发布帖子</button
		>
	</form>
	{#if submit}
		{#await handleCreatePost()}
			<p>发送数据中..</p>
		{:then data}
			<div class="text-success">
				成功创建帖子！快去
				<a class="link text-primary hover:text-primary-focus" href="/community">查看帖子</a> 吧！
			</div>
		{:catch error}
			<p>Something went wrong while sending the data:</p>
			<pre>{error}</pre>
		{/await}
	{/if}
</div>
