<script lang="ts">
	import Account from '$lib/components/ui/auth/Account.svelte';
	import Auth from '$lib/components/ui/auth/Auth.svelte';
	import { page } from '$app/stores';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	export let supabase: SupabaseClient;
	export let session: Session;
</script>

<svelte:head>
	<title>我的账号 - Feavel's Camp</title>
	<meta name="description" content="我的账号" />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Account {supabase} {session} />
{/if}
