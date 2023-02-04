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
					<div class="dropdown-end dropdown-hover dropdown">
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

					<div class="dropdown-end dropdown-hover dropdown">
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
				<div class="flex flex-col-reverse justify-center gap-6 md:flex-row">
					<slot />
				</div>
			</div>
			<footer class="footer footer-center rounded bg-base-200 p-10 text-base-content">
				<div class="grid grid-flow-col gap-4">
					<a class="link-hover link" href="/community/guide/contribute">贡献指南</a>
					<a class="link-hover link" href="/community/about">关于本站</a>
					<a class="link-hover link" href="https://feavel.com" target="_blank">关于作者</a>
					<a class="link-hover link">隐私条约</a>
				</div>
				<div>
					<div class="grid grid-flow-col gap-4">
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current"
							>
								<path
									d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
								/>
							</svg>
						</a>
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current"
							>
								<path
									d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
								/>
							</svg>
						</a>
						<a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								class="fill-current"
								><path
									d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
								/></svg
							></a
						>
					</div>
				</div>
				<div>
					<p>Copyright © 2023 - All right reserved by FEAVEL</p>
				</div>
			</footer>
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
						📫 我发的帖子
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
