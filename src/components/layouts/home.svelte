<script>
	// @ts-nocheck
	export let title;
	export let author;
	export let date;
</script>

<div class="prose-xl prose ">
	<h1 class="mb-0 text-6xl font-extrabold">{title}</h1>
	<p class="mb-0">by {author}, {date}</p>
	<div class="divider" />
	<div class="first-letter:text-5xl first-letter:text-blue-600">
		<slot />
	</div>
</div>
