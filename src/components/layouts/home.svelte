<script>
	// @ts-nocheck
	export let title;
	export let author;
	export let date;
</script>

<div class="prose-xl prose">
	<!-- <span
		class="block cursor-pointer"
		on:keypress={() => {
			history.back();
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="inline h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
		</svg>
		Back
	</span> -->
	<h1 class="">{title}</h1>
	<p class="my-4 ">by {author}, {date}</p>
	<div class="first-letter:text-5xl first-letter:text-blue-600">
		<slot />
	</div>
</div>
