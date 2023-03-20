<script lang="ts">
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import New from '$lib/components/ui/badges/New.svelte';
	import Wip from '$lib/components/ui/badges/Wip.svelte';
	import ThemeChanger from '$lib/components/ui/navBar/ThemeChanger.svelte';
	import PageTransition from '$lib/components/ui/PageTransition.svelte';
	import Footer from '$lib/components/ui/Footer.svelte';
	import Jellyfish from '$lib/components/ui/spinner/Jellyfish.svelte';
	import Logo from '../ui/Logo.svelte';

	export let key: string;

	let user = $page.data.session && $page.data.session.user;
	let drawercontent: HTMLDivElement;
	let checked: boolean;

	let isLoading = false;

	beforeNavigate(({ to }) => {
		isLoading = !!to?.route.id;
		checked = false;
	});

	afterNavigate(() => {
		drawercontent.scrollTop = 0;
		isLoading = false;
	});
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

{#if isLoading}
	<Jellyfish />
{/if}

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="drawer">
	<input type="checkbox" id="my-drawer-3" class="drawer-toggle" bind:checked />
	<div bind:this={drawercontent} class="drawer-content flex flex-col">
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

			<div class="hidden flex-1 lg:block lg:align-middle ">
				<ul class="menu menu-horizontal">
					<li><a href="/home" class="btn-ghost btn m-1 rounded-md">Feavel's Camp</a></li>
					<!-- Navbar menu content here -->
					<li class="dropdown-hover dropdown-end dropdown">
						<a tabindex="0" class="btn-ghost btn m-1" href="/learn">学习</a>

						<ul
							tabindex="0"
							class="dropdown-content grid w-max grid-cols-3 rounded-sm bg-base-200 p-4 shadow"
						>
							<!-- 编程 -->
							<ul class="menu">
								<li class="menu-title">
									<span>网络工程</span>
								</li>
								<li>
									<a href="/learn/programming"> 👶🏻 基础知识 </a>
								</li>
								<li>
									<a href="/learn/intermidiate">
										🎨 进段工程 <Wip />
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
									<a href="/chat">
										🦉哲学助理 <New />
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
						</ul>
					</li>

					<li class="dropdown-end dropdown-hover dropdown">
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
									<a href="/community"> 博客主页 </a>
								</li>
								<li>
									<a href="/community/guide"> 社区指南🧭 </a>
								</li>
								<li>
									<a href="/my-account"> 我的博客 </a>
								</li>
							</ul>
							<ul class="menu">
								<li class="menu-title">
									<span>特殊服务</span>
								</li>
								<li>
									<a href="/community/guide/contribute"> 贡献 </a>
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
					</li>
					<li>
						<a href="/chat" class="btn-ghost btn m-1">OWL </a>
					</li>
				</ul>
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
		<PageTransition {key}>
			<div class="mt-24 min-h-screen px-6 pb-16 xl:px-2">
				<div class="flex justify-center overflow-x-hidden overscroll-x-none">
					<!-- Page content here -->
					<slot />
				</div>
			</div>
			<Footer />
		</PageTransition>
	</div>

	<!-- Drawer -->
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<div class="menu w-80 bg-base-100 p-4">
			<!-- Sidebar content here -->
			<a href="/home"><div class="btn-primary btn mx-2 px-2">feavel的部落 - 主页</div></a>
			<div class="divider" />
			<!-- Blog -->
			<ul class="menu">
				<li class="menu-title">
					<span>社区</span>
				</li>
				<li>
					<a href="/community"> 📨 博客主页 </a>
				</li>
				<li>
					<a href="/my-account"> 📫 我发的帖子 </a>
				</li>

				<li>
					<a href="/community/guide/contribute"> 💕 贡献 </a>
				</li>
			</ul>
			<div class="divider" />
			<!-- 编程 -->
			<ul class="menu">
				<li class="menu-title">
					<span>网络工程</span>
				</li>
				<li>
					<a href="/learn/programming"> 👶🏻 基础知识 </a>
				</li>
				<li>
					<a href="/learn/intermidiate">
						🎨 进段工程 <Wip />
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
					<a href="/chat">
						🦉哲学助理 <New />
					</a>
				</li>
				<li>
					<a>
						精神分析
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
