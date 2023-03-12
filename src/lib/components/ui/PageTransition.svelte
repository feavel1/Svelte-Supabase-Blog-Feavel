<script lang="ts">
	import { fly } from 'svelte/transition';
	export let key: string;
</script>

{#key key}
	<div
		in:fly={{ y: -100, duration: 600, delay: 300 }}
		out:fly={{ y: -50, duration: 300 }}
		class="-z-50"
	>
		<slot />
	</div>
{/key}
