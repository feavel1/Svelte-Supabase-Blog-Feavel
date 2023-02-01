<script lang="ts">
	// @ts-nocheck
	export let title = '标题';
	export let author = '作者';
	export let date = '日期';

	import BackTo from '../ui/BackTo.svelte';
</script>

<title>Feavel's Camp - {title}</title>

<div class="w-full max-w-3xl">
	<BackTo />
	<h1 class="my-0 text-5xl text-6xl font-extrabold">{title}</h1>
	<p class="my-0">by {author}, {date}</p>

	<div class="divider " />
	<div class="prose-lg prose first-letter:text-cyan-300 md:prose-xl">
		<slot />
	</div>
</div>
