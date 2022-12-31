<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar fixed w-full bg-base-300">
			<div class="flex-1 lg:hidden">
				<label for="my-drawer-3" class="btn-ghost btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>

			<div class="hidden flex-1 lg:block">
				<div class="btn-ghost btn mx-2 px-2"><a href="/home">feavel的部落</a></div>
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<div class="dropdown-hover dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn m-1">学习</label>
						<ul
							tabindex="0"
							class="dropdown-content grid w-max grid-cols-2 rounded-sm bg-base-200 p-4 shadow"
						>
							<div class="menu w-56">
								<li class="menu-title">
									<span>音乐</span>
								</li>
								<li>
									<a
										>音乐制作
										<div class="badge-primary badge">NEW!</div></a
									>
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
								<li>
									<a>
										推广
										<div class="badge">WIP</div>
									</a>
								</li>
							</div>

							<div class="menu">
								<li class="menu-title">
									<span>精神分析</span>
								</li>
								<li>
									<a>
										音乐哲学
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										音乐精神分析
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										电影配乐
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										演讲与发言技巧
										<div class="badge">WIP</div>
									</a>
								</li>
								<li>
									<a>
										还有很多...
										<div class="badge">WIP</div>
									</a>
								</li>
							</div>
						</ul>
					</div>

					<div class="dropdown-hover dropdown-end dropdown">
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
									<a href="/community/guide">
										阅读博客规则 <div class="badge-primary badge">New!</div>
									</a>
								</li>
								<li>
									<a>
										我的博客
										<div class="badge">WIP</div></a
									>
								</li>
							</div>
							<div class="menu">
								<li class="menu-title">
									<span>特殊服务</span>
								</li>
								<li><a>贡献</a></li>
								<li><a>技术支持</a></li>
								<li><a>赞助</a></li>
								<li><a>关于网站</a></li>
							</div>
						</ul>
					</div>
				</ul>
			</div>
			<div class="btn-ghost btn flex gap-2 px-4">
				<a href="/my-account">我的账号</a>
			</div>
			<div class="flex-2">
				<!-- THEME CHANGER -->

				<label class="swap-rotate swap btn-ghost btn mx-1">
					<input type="checkbox" data-toggle-theme="mytheme,cupcake" data-act-class="ACTIVECLASS" />

					<svg
						class="swap-on h-5 w-5 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
						/>
					</svg>

					<svg
						class="swap-off h-5 w-5 fill-current"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
						/>
					</svg>
				</label>
			</div>
		</div>

		<!-- Page content here -->
		<div class="mt-28 px-6 pb-16 xl:pr-2">
			<div class="flex flex-col-reverse justify-center gap-6 xl:flex-row ">
				<slot />
			</div>
		</div>
	</div>

	<!-- Drawer -->

	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu w-80 bg-base-100 p-4">
			<!-- Sidebar content here -->
			<li><a>Learn</a></li>
			<li><a>Community</a></li>
			<li><a>My Account</a></li>
		</ul>
	</div>
</div>
