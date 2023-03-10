<script lang="ts">
	import Account from '$lib/components/ui/auth/Account.svelte';
	import Auth from '$lib/components/ui/auth/Auth.svelte';
	import type { Session } from '@supabase/supabase-js';
	export let session: Session | null;
</script>

<svelte:head>
	<title>我的账号 - Feavel's Camp</title>
	<meta name="description" content="我的账号" />
</svelte:head>

{#if !session}
	<Auth />
{:else}
	<Account {session} />
{/if}
