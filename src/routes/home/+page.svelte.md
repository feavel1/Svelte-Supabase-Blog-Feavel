---
layout: home
---

<script>
	import Card from '../../../src/components/ui/Card.svelte';
</script>

<title>Home - Feavel's Camp</title>

<h1 class="mb-0 text-5xl font-extrabold">🎉欢迎来到主页🎉</h1>
<p class="mb-0">by Feavel, 2022年12月29日</p>

<div class="divider" />

## 欢迎您来到主页

现在网站还在制作中，但是很多内容已经可以查看了 💕

要是您愿意帮忙更新，请在上方‘contribute’查看方式。

我们支持所有类型的帮助。

进度：◼︎◼︎◻︎◻︎◻︎◻︎◻︎◻︎◻︎◻︎

## 现在官网上可学习的东西：

<div class="first-letter:text-5xl first-letter:text-blue-600">
	<div class="flex justify-center content-center md:grid-cols-2 flex-col gap-3 md:grid">
		<Card>
			<div class="card-body">
				<h2 class="card-title text-accent">音乐</h2>
				<p>是否对音乐制作、混音、录制、母带等感兴趣？</p>
				<div class="card-actions justify-end">
					<a href="learn/music"><button class="btn-primary btn">阅读</button></a>
				</div>
			</div>
		</Card>
		<Card>
			<div class="card-body">
				<h2 class="card-title text-accent">精神分析</h2>
				<p>是否想阅读关于哲学或者精神分析的内容？</p>
				<div class="card-actions justify-end">
					<button class="btn-primary btn">查看内容</button>
				</div>
			</div>
		</Card>
		<Card>
			<div class="card-body">
				<h2 class="card-title text-accent">论坛</h2>
				<p>可以在论谈里查看/发布自己喜欢的内容。</p>
				<div class="card-actions justify-end">
				<a href="/community">	<button class="btn-primary btn">查看帖子</button></a>
				</div>
			</div>
		</Card>
		<Card>
			<div class="card-body">
				<h2 class="card-title text-accent">我的账号</h2>
				<p>查看自己的账号状态</p>
				<div class="card-actions justify-end">
				<a href="/my-account"><button class="btn-primary btn">查看</button></a>	
				</div>
			</div>
		</Card>
	</div>
</div>

## 需要完成的内容：

- [x] ~~页面 animation~~
- [ ] 登录功能
- [ ] 用户主页
- [ ] 写帖子的功能
