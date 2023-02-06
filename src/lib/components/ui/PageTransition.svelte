<script lang="ts">
	import { beforeUpdate, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let key: string;
</script>

{#key key}
	<div in:fly={{ y: -50, duration: 1000, delay: 600 }} out:fly={{ y: -50, duration: 550 }}>
		<slot />
	</div>
{/key}

<!-- {#key key}
	<div in:slide={{ duration, delay: duration }} out:slide={{ duration }}>
		<slot />
	</div>
{/key} -->
