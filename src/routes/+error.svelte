<script>
	import { page } from '$app/stores';
	import BackTo from '../components/ui/BackTo.svelte';
</script>

<BackTo />
<h1>{$page.status}: {$page.error?.message}</h1>
