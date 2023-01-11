<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabase } from '$lib/supabaseClient';
	import CardPostUser from '../CardPostUser.svelte';
	import BackTo from '../BackTo.svelte';

	export let session: AuthSession;

	let loading = false;
	let username: string | null = null;
	let website: string | null = null;
	let avatarUrl: string | null = null;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (data) {
				username = data.username;
				website = data.website;
				avatarUrl = data.avatar_url;
			}

			if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	async function updateProfile() {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<div class="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
	<form class="form-control mx-auto w-full max-w-sm" on:submit|preventDefault={updateProfile}>
		<BackTo />
		<h1 class="mb-4 text-5xl">我的账号</h1>
		<div>
			<label class="label" for="email">Email</label>
			<input
				class="input-bordered input w-full "
				id="email"
				type="text"
				value={session.user.email}
				disabled
			/>
		</div>
		<div>
			<label class="label" for="username">名字</label>
			<input class="input-bordered input w-full " id="username" type="text" bind:value={username} />
		</div>
		<div>
			<label class="label" for="website">用户网址</label>
			<input
				class="input-bordered input w-full "
				id="website"
				type="website"
				bind:value={website}
			/>
		</div>

		<div class="mt-4 flex flex-col gap-3">
			<div class="flex justify-between">
				<input
					type="submit"
					class="btn-secondary btn"
					value={loading ? '加载中...' : '更新信息'}
					disabled={loading}
				/>
				<a href="/community/post/create"><button class="btn-primary btn">创建帖子</button></a>
				<a href="/community"><button class="btn-accent btn">查看社区</button></a>
			</div>
			<button class="btn-error btn" on:click={signOut} disabled={loading}>退出登录</button>
		</div>
	</form>

	<div class="mx-auto mt-12 w-full max-w-sm">
		<h1 class="text-3xl">您创建的帖子：</h1>
		<div class="divider" />
		<CardPostUser>
			<div class="card-body">
				<h2 class="card-title">音乐是没有意义的</h2>
				<p>音乐是全世界最...</p>
				<div class="card-actions justify-between">
					<button class="btn-primary btn">0个赞❤️</button>
					<a href="/community/post/edit"><button class="btn-primary btn">编辑📑</button></a>
				</div>
				<div class="">
					<div>
						用户「邮箱名」说：
						<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
					</div>
				</div>
				<div class="">
					<div>
						用户「邮箱名」说：
						<div class="rounded-lg bg-neutral p-2 text-neutral-content">评论</div>
					</div>
				</div>
			</div>
		</CardPostUser>
	</div>
</div>
