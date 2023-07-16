<script lang="ts">
	import { onMount } from 'svelte';
	let isVisible = false;
	let element: any;
	onMount(() => {
		const handleIntersect = (e: any) => {
			isVisible = e[0].isIntersecting;
		};
		const root = null;
		const rootMargin = `100px 0px 100px 0px`;
		const options = { root, rootMargin };
		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element);
	});
</script>

<div bind:this={element}>
	<slot {isVisible} />
</div>
