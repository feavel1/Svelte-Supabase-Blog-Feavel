<script lang="ts">
	import { fly } from 'svelte/transition';
	export let key: string;
</script>

{#key key}
	<div
		in:fly={{ y: -50, duration: 500, delay: 600 }}
		out:fly={{ y: -50, duration: 350 }}
		class="-z-50"
	>
		<slot />
	</div>
{/key}
