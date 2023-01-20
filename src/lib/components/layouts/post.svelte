<script lang="ts">
	// @ts-nocheck

	export let data;
	export let form;
	export let layout;

	export let title = '标题';
	export let author = '作者';
	export let date = '日期';

	import BackTo from '../ui/BackTo.svelte';
</script>

<title>Feavel's Camp - {title} </title>

<div class="prose-xl prose w-full max-w-3xl">
	<BackTo />
	<div>
		<h1 class="mb-0 text-6xl font-extrabold">{title}</h1>
		<p class="my-0">by {author}, {date}</p>
	</div>

	<div class="divider" />
	<div class="first-letter:text-blue-600">
		<slot />
	</div>
</div>
