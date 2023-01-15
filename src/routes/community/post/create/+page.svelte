<script>
	import BackTo from '../../../../components/ui/BackTo.svelte';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';

	let loading = false;

	let postTitle = '';
	let postContent = '';
	let postEmail = $page.data.session.user.email;

	async function handleCreatePost() {
		try {
			loading = true;

			const { data, error } = await supabase
				.from('posts')
				.insert([{ title: postTitle, content: postContent, email: postEmail }]);

			if (data) {
			}
			if (error) {
				throw error;
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<div class="w-full max-w-3xl">
	<BackTo />
	<h1 class="mb-4 text-6xl">创建帖子</h1>
	<form class="form-control" on:submit|preventDefault={handleCreatePost}>
		<div>
			<label class="label" for="email">帖子标题</label>
			<input bind:value={postTitle} class="input-bordered input-accent input w-full max-w-xs" />
		</div>
		<div>
			<label class="label" for="email">帖子内容</label>
			<textarea
				bind:value={postContent}
				class="textarea-accent textarea h-56 w-full"
				placeholder="# 这里可以输入你想发布的内容,请编写"
			/>
		</div>
		<button disabled={loading} type="button" class="btn">发布帖子</button>
	</form>
</div>
