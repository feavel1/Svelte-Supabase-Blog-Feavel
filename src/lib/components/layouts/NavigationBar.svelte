<script>
	import { page } from '$app/stores';
	import ThemeChanger from '$lib/components/ui/navBar/ThemeChanger.svelte';
	import New from '../ui/badges/New.svelte';
	import Wip from '../ui/badges/Wip.svelte';

	let user = $page.data.session && $page.data.session.user;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="drawer-new">
	<input type="checkbox" id="my-drawer-3" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar fixed w-full border-b border-base-100 backdrop-blur-md">
			<div class="flex-1 lg:hidden">
				<label for="my-drawer-3" class="btn-ghost btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
			</div>

			<div class="hidden flex-1 lg:block">
				<a href="/home"><div class="btn-ghost btn mx-2 px-2">feavel的部落</div></a>
				<div class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<div class="dropdown-hover dropdown-end dropdown">
						<a tabindex="0" class="btn-ghost btn m-1" href="/learn">学习</a>

						<div
							tabindex="0"
							class="dropdown-content grid w-max grid-cols-3 rounded-sm bg-base-200 p-4 shadow"
						>
							<!-- 编程 -->
							<ul class="menu">
								<li class="menu-title">
									<span>网络工程</span>
								</li>
								<li>
									<a href="/learn/programming">
										👶🏻 基础知识 <New />
									</a>
								</li>
								<li>
									<a>
										🎨 前端工程 <Wip />
									</a>
								</li>
								<li>
									<a>
										后段区 <Wip />
									</a>
								</li>
							</ul>
							<!-- 哲学 -->
							<ul class="menu">
								<li class="menu-title">
									<span>哲学</span>
								</li>
								<li>
									<a>
										哲学史 <Wip />
									</a>
								</li>
								<li>
									<a>
										精神分析 <Wip />
									</a>
								</li>
								<li>
									<a>
										地缘政治学 <Wip />
									</a>
								</li>
							</ul>

							<!-- 音乐 -->
							<ul class="menu">
								<li class="menu-title">
									<span>音乐</span>
								</li>
								<li>
									<a>
										音乐制作 <Wip />
									</a>
								</li>
								<li>
									<a>
										混音 <Wip />
									</a>
								</li>
								<li>
									<a>
										母带 <Wip />
									</a>
								</li>
								<li>
									<a>
										录音/录制 <Wip />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="dropdown-end dropdown-hover dropdown">
						<div tabindex="0" class="btn-ghost btn m-1">社区</div>

						<div
							tabindex="0"
							class="dropdown-content grid w-max grid-cols-2 rounded-sm bg-base-200 p-4 shadow"
						>
							<ul class="menu w-56">
								<li class="menu-title">
									<span>BLOG</span>
								</li>
								<li>
									<a href="/community">
										博客主页 <New />
									</a>
								</li>
								<li>
									<a href="/community/guide">
										社区指南🧭 <New />
									</a>
								</li>
								<li>
									<a href="/my-account">
										我的博客 <New />
									</a>
								</li>
							</ul>
							<ul class="menu">
								<li class="menu-title">
									<span>特殊服务</span>
								</li>
								<li>
									<a href="/community/guide/contribute">
										贡献 <New />
									</a>
								</li>
								<li>
									<a>
										赞助 <Wip />
									</a>
								</li>
								<li>
									<a>
										关于网站 <Wip />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<a href="/my-account">
				<div class="btn-ghost btn flex gap-2 px-4">
					{#if user}我的账户{:else}登录{/if}
				</div>
			</a>
			<div class="flex-2">
				<ThemeChanger />
			</div>
		</div>
		<!-- Page content here -->
		<slot />
	</div>
	<!-- Drawer -->
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<div class="menu w-80 bg-base-100 p-4">
			<!-- Sidebar content here -->
			<a href="/home"><div class="btn-primary  btn mx-2 px-2">feavel的部落 - 主页</div></a>
			<div class="divider" />
			<!-- Blog -->
			<ul class="menu">
				<li class="menu-title">
					<span>社区</span>
				</li>
				<li>
					<a href="/community">
						📨 博客主页 <New />
					</a>
				</li>
				<li>
					<a href="/my-account">
						📫 我发的帖子
						<New />
					</a>
				</li>

				<li>
					<a href="/community/guide/contribute">
						💕 贡献 <New />
					</a>
				</li>
			</ul>
			<div class="divider" />
			<!-- 编程 -->
			<ul class="menu">
				<li class="menu-title">
					<span>网络工程</span>
				</li>
				<li>
					<a href="/learn/programming">
						👶🏻 基础知识 <New />
					</a>
				</li>
				<li>
					<a>
						🎨 前端工程 <Wip />
					</a>
				</li>
				<li>
					<a>
						后段区 <Wip />
					</a>
				</li>
			</ul>
			<div class="divider" />
			<!-- 哲学 -->
			<ul class="menu">
				<li class="menu-title">
					<span>哲学</span>
				</li>
				<li>
					<a>
						哲学史
						<Wip />
					</a>
				</li>
				<li>
					<a>
						神分析
						<Wip />
					</a>
				</li>
			</ul>
			<div class="divider" />

			<!-- 音乐 -->
			<ul class="menu">
				<li class="menu-title">
					<span>音乐</span>
				</li>
				<li>
					<a>
						乐制作
						<Wip />
					</a>
				</li>
				<li>
					<a>
						混音
						<Wip />
					</a>
				</li>
				<li>
					<a>
						母带
						<Wip />
					</a>
				</li>
				<li>
					<a>
						录/录制
						<Wip />
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
