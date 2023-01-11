<script>
	import BackTo from '../../../../components/ui/BackTo.svelte';
</script>

<div class="w-full max-w-3xl">
	<BackTo />
	<h1 class="mb-4 text-6xl">编辑帖子</h1>
	<div>
		<label class="label" for="email">帖子标题</label>
		<input class="input-bordered input-warning input w-full max-w-xs" />
	</div>
	<div>
		<label class="label" for="email">帖子内容</label>
		<textarea
			class="textarea-warning textarea h-56 w-full"
			placeholder="# 这里可以输入你想发布的内容
请编写"
		/>
	</div>
	<div class="btn-primary btn mt-4">保存编辑</div>
</div>
