<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import PageTransition from '$lib/components/ui/PageTransition.svelte';
	import ThemeChanger from '$lib/components/ui/navBar/ThemeChanger.svelte';
	import HamburgerIcon from '$lib/components/ui/navBar/HamburgerIcon.svelte';

	export let data: PageData;

	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte

		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar fixed w-full border-b border-base-100 backdrop-blur-md">
			<div class="flex-1 lg:hidden">
				<HamburgerIcon />
			</div>

			<div class="hidden flex-1 lg:block">
				<a href="/home"><div class="btn-ghost btn mx-2 px-2">feavel的部落</div></a>
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<div class="dropdown-end dropdown dropdown-hover">
						<label tabindex="0" class="btn-ghost btn m-1">学习</label>
						<ul
							tabindex="0"
							class="dropdown-content grid w-max grid-cols-3 rounded-sm bg-base-200 p-4 shadow"
						>
							<!-- 哲学 -->
							<div class="menu">
								<li class="menu-title">
									<span>哲学</span>
								</li>
								<li>
									<a>
										哲学史
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										精神分析
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										地缘政治学
										<div class="badge">WIP</div>
									</a>
								</li>
							</div>

							<!-- 音乐 -->
							<div class="menu">
								<li class="menu-title">
									<span>音乐</span>
								</li>
								<li>
									<a>
										音乐制作
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										混音
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										母带
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										录音/录制
										<div class="badge">WIP</div>
									</a>
								</li>
							</div>
							<!-- 编程 -->
							<div class="menu">
								<li class="menu-title">
									<span>网络工程</span>
								</li>
								<li>
									<a>
										介绍
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										前端区
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										网站设计 🎨
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										后段区
										<div class="badge">WIP</div>
									</a>
								</li>
							</div>
						</ul>
					</div>

					<div class="dropdown-end dropdown dropdown-hover">
						<label tabindex="0" class="btn-ghost btn m-1">社区</label>

						<ul
							tabindex="0"
							class="dropdown-content grid w-max grid-cols-2 rounded-sm bg-base-200 p-4 shadow"
						>
							<div class="menu w-56">
								<li class="menu-title">
									<span>BLOG</span>
								</li>
								<li>
									<a href="/community">
										博客主页 <div class="badge-primary badge">New!</div>
									</a>
								</li>
								<li>
									<a href="/community/guide">
										社区指南🧭 <div class="badge-primary badge">New!</div>
									</a>
								</li>
								<li>
									<a href="/my-account">
										我的博客
										<div class="badge-primary badge">New!</div>
									</a>
								</li>
							</div>
							<div class="menu">
								<li class="menu-title">
									<span>特殊服务</span>
								</li>
								<li>
									<a href="/community/guide/contribute">
										贡献 <div class="badge-primary badge">New!</div>
									</a>
								</li>
								<li>
									<a>
										赞助 <div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										关于网站 <div class="badge">WIP</div>
									</a>
								</li>
							</div>
						</ul>
					</div>
				</ul>
			</div>
			<a href="/my-account">
				<div class="btn-ghost btn flex gap-2 px-4">我的账号</div>
			</a>
			<div class="flex-2">
				<!-- THEME CHANGER -->
				<ThemeChanger />
			</div>
		</div>

		<!-- Page content here -->
		<PageTransition key={data.url}>
			<div class="mt-28 px-6 pb-16 xl:px-2">
				<div class="flex flex-col-reverse justify-center gap-6 md:flex-row ">
					<slot />
				</div>
			</div>
		</PageTransition>
	</div>

	<!-- Drawer -->

	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu w-80 bg-base-100 p-4">
			<!-- Sidebar content here -->
			<a href="/home"><div class="btn-primary  btn mx-2 px-2">feavel的部落 - 主页</div></a>
			<div class="divider" />
			<!-- Blog -->
			<div class="menu">
				<li class="menu-title">
					<span>社区</span>
				</li>
				<li>
					<a href="/community">
						📨 博客主页 <div class="badge-primary badge">New!</div>
					</a>
				</li>
				<li>
					<a href="/my-account">
						📫 用户帖子
						<div class="badge-primary badge">New!</div>
					</a>
				</li>

				<li>
					<a href="/community/guide/contribute">
						💕 贡献 <div class="badge-primary badge">New!</div>
					</a>
				</li>
			</div>
			<div class="divider" />

			<!-- 哲学 -->
			<div class="menu">
				<li class="menu-title">
					<span>哲学</span>
				</li>
				<li>
					<a>
						哲学史
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						精神分析
						<div class="badge">WIP</div>
					</a>
				</li>
			</div>
			<div class="divider" />

			<!-- 音乐 -->
			<div class="menu">
				<li class="menu-title">
					<span>音乐</span>
				</li>
				<li>
					<a>
						音乐制作
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						混音
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						母带
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						录音/录制
						<div class="badge">WIP</div>
					</a>
				</li>
			</div>
			<div class="divider" />

			<!-- 编程 -->
			<div class="menu">
				<li class="menu-title">
					<span>网络工程</span>
				</li>
				<li>
					<a>
						介绍
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						前端区
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						🎨 网站设计
						<div class="badge">WIP</div>
					</a>
				</li>
				<li>
					<a>
						后段区
						<div class="badge">WIP</div>
					</a>
				</li>
			</div>
		</ul>
	</div>
</div>
