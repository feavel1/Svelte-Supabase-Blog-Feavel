---
layout: Home
---

<script>
import Card from '$lib/components/ui/Card.svelte';
import Logo from '$lib/components/ui/Logo.svelte';
</script>

<svelte:head>

<title>主页 - Feavel的部落</title>
<meta name="description" content="主页" />

</svelte:head>

<h1 class="my-0 text-5xl font-extrabold md:text-6xl">欢迎来到主页🎉</h1>
<p class="my-0">by Feavel, 2022年12月29日</p>

<div class="divider" />

<div class="prose-xs prose md:prose-xl">

## 网站介绍 🎉

现在网站还在制作中，但是很多内容已经可以查看了 💕

要是您愿意帮忙更新，请在上方 [贡献](/community/guide/contribute) 查看方式。

我们支持所有类型的帮助。

进度：◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◻︎

## 现在官网上可以使用的功能 📨

<div class="first-letter:text-5xl first-letter:text-blue-600">
<div class="flex justify-center content-center md:grid-cols-2 flex-col gap-3 md:grid">

<Card>
	<div class="card-body">
		<h3 class="card-title">学习🧑🏼‍💻</h3>
		<p>是否想学混音、编程、哲学？</p>
		<div class="card-actions justify-end">
			<a href="/learn"><button class="btn-primary btn">阅读</button></a>
		</div>
	</div>
</Card>

<Card>
	<div class="card-body">
		<h3 class="card-title">论坛📡</h3>
		<p>可以在论谈里查看/发布自己喜欢的内容。</p>
		<div class="card-actions justify-end">
			<a href="/community">
				<button class="btn-primary btn">查看帖子</button>
			</a>
		</div>
	</div>
</Card>

<Card>
	<div class="card-body">
		<h3 class="card-title">我的账号📠</h3>
		<p>查看自己的账号状态</p>
		<div class="card-actions justify-end">
			<a href="/my-account">
				<button class="btn-primary btn">查看</button>
			</a>
		</div>
	</div>
</Card>

<Card>
	<div class="card-body">
		<h3 class="card-title">内容创作🫶</h3>
		<p>您愿意帮忙创作网站内容吗？</p>
		<div class="card-actions justify-end">
			<a href="/community/guide/contribute"><button class="btn-primary btn">阅读</button></a>
		</div>
	</div>
</Card>

</div>
</div>

</div>

<div class="divider" />

<Logo />
