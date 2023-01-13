<script>
	import BackTo from '../../../../components/ui/BackTo.svelte';
	import { createPost } from '$lib/services';

	function handleCreatePost() {
		let postTitle = '';
		let postContent = '';
	}
</script>

<div class="w-full max-w-3xl">
	<BackTo />
	<h1 class="mb-4 text-6xl">创建帖子</h1>
	<form class="form-control" on:submit|preventDefault={handleCreatePost}>
		<div>
			<label class="label" for="email">帖子标题</label>
			<input class="input-bordered input-accent input w-full max-w-xs" />
		</div>
		<div>
			<label class="label" for="email">帖子内容</label>
			<textarea
				class="textarea-accent textarea h-56 w-full"
				placeholder="# 这里可以输入你想发布的内容,请编写"
			/>
		</div>
		<div class="btn-primary btn mt-4">创建帖子</div>
	</form>
</div>
