<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="prose">
	<h1>{data.post.title}</h1>
	<span>作者：{data.post.email}</span>
	<p>{data.post.content}</p>
</div>
