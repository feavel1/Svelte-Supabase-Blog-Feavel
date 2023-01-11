<script>
	import { page } from '$app/stores';
	import Account from '../../../src/components/ui/auth/Account.svelte';
	import Auth from '../../../src/components/ui/auth/Auth.svelte';
</script>

<svelte:head>
	<title>我的账号 - Feavel's Camp</title>
	<meta name="description" content="我的账号" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Account session={$page.data.session} />
{/if}
