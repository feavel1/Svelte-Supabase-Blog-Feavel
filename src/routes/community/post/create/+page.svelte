<script lang="ts">
	import BackTo from '../../../../lib/components/ui/BackTo.svelte';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';

	let submit = false,
		postTitle: string,
		postContent: string,
		postEmail = $page.data.session?.user.email!,
		postCreator = $page.data.session?.user.id!;

	async function handleCreatePost() {
		const { data, error } = await supabase
			.from('posts')
			.insert([
				{ title: postTitle, content: postContent, email: postEmail, post_creator_id: postCreator }
			]);
		if (error) throw new Error(error.message);
		return data;
	}
</script>

{#if !$page.data.session}
	<div class="flex flex-col">
		<BackTo />
		<div>
			暂时未发现登录信息，请先
			<a href="/my-account"><button class="btn-info btn">登录</button></a>
		</div>
	</div>
{:else}
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
			<button disabled={submit} type="submit" class="btn" on:click={() => (submit = false)}>
				发布帖子
			</button>
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
{/if}
