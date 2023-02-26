---
layout: post
author: Feavel
date: 2022年2月26日
title: 快速搭建Svelte工程
---

<script>
  import vscode from "./VSCodedownload.gif"
  import svelteSetup from "./svelteSetup.gif"
  import pageContent from "./newPage.jpg"
	import initRepo from "./initRepo.jpg"
	import Vercel from "./Vercel.jpg"
</script>

## 看完这篇你会学会：

- 安装必要的开发工具 🔧
- 使用终端下载软件包 💻
- 开发一个简单又漂亮的界面 🎨
- 学会把自己的网站上传到云上 ☁️

## 1. 安装必要的开发工具

在 [学习道理](/learn/programming/roadmap) 我有简单提到我使用的工具。但是我没有带大家一步一步安装。

### 1.1 安装 [VS Code](https://code.visualstudio.com) 软件：

![VS Code]({vscode})

### 1.2 安装开源的 [Node.js](https://nodejs.org/en/)

- 必有的包管理器。在写这个文章时，最新版本是 19.7.0。

这个软件有多种安装方式，可以从官网下载，也可以用终端命令下载。

(Mac 用户)要是你想用 Brew 管理器（推荐）。只需要两行代码：

下载 [Brew🍺](https://brew.sh)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

下载 [Node](https://formulae.brew.sh/formula/node) 🟩

```bash
brew install node
```

### 1.3 安装 NPX

安装完 Node，你就可以使用 npm 命令添加别的企业创建的包，比如说 npx：

```bash
npm i npx
```

## 2. 搭建 [SvelteKit](https://kit.svelte.dev) 工程

在这里我们会和大家一起下载必要的工程文件和插件

### 2.1 安装和运行 Svelte Kit

在 svelteKit 的官网上，我们可以找到非常简约的安装流程，但是在这里我会和大家扩展一下安装包，这样我们就可以使用 ui 包等工具。

首先我们得按顺序在 vsCode 的终端里运行这些行的代码。

```bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev -- --open
```

![Svelte Setup]({svelteSetup})

- 第一行是用来安装必要的 Svelte 文件，比如说 routes 和配置文件。`my-app` 是您要创建的工程名，你可以改为`my-first-app`等名字

- 第二行是用来进入文件夹中，因为我们在安装的时候，终端会给我们创建一个文件夹。

- 第三行是用来下载`pakage.json`文件里表明的必要工具，比如说 svelte 引擎、Kit 引擎、eslint 检查工具等。

- 第四行诗用来运行工程。这样子你就能在浏览器内打开你的软件了。

恭喜 🎉 您成功搭建自己的第一个网站

### 2.2 添加 [Tailwind css](https://tailwindcss.com)

Tailwind 是一个非常好用的 css class 包，可以允许开发者快速开发多种类型平台的前端。Tailwind 包括颜色分类，不同的文字类型，大小，布局等功能。

如果您使用的是 Svelte，你可以用一行代码将 Tailwind 添加到你的工程中：

(前提是您有安装并下载 NPX)

```bash
npx svelte-add@latest tailwindcss
```

添加完了之后记得运行 `npm i`来下载你刚刚添加的东西。

要是您想感受一下手动添加，您可以访问 [tailwind installation guide](https://tailwindcss.com/docs/guides/sveltekit) 来添加。

下载完之后，🌹 我们可以打开看一下现在程序长什么样 🌹

```bash
npm run dev -- --open
```

以后我会教怎么使用 [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) 的 “prose” 来配置自己的 Markdown。

## 3. 添加一些内容到自己的页面 📃 上

这里我提供一些很简单的 html，您可以直接添加到 `src/routes/+page.svelte`里

<div class="grid grid-cols-2 gap-3">

```html
<div class="flex h-screen flex-col">
	<header class="bg-slate-700 py-5 text-center text-white">页面标题</header>
	<main class="flex-1 overflow-y-auto p-5">
		What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
		printer took a galley of type and scrambled it to make a type specimen book. It has survived not
		only five centuries, but also the leap into electronic typesetting
	</main>
	<footer class="bg-slate-700 py-5 text-center text-white">By feavel</footer>
</div>
```

![页面内容]({pageContent})

</div>
恭喜 🎉 你加了一些简单的内容啦

## 4. 发布自己的网页 ☁️

现在发布自己的网页的方式多种多样... 但是我们关注

- 发布速度 ⚡️
- 更新流程 ⬆️
- 加载速度 ⬇️ 等

您可以先在这里注册一个 [github](https://github.com) 账户来上传自己的代码。

当你注册好了，您可以点击 vsCode 右下角的 github 登录 🧑🏼‍💻，然后登录自己的账号。

这时，您需要在 vs code 左边的 source control 里上传自己的代码到 github。

### 4.1 第一次上传：

- 您需要安装 [git](https://git-scm.com) （跟踪代码更改的工具）流程。
- 登录自己的 git

全部东西登录完之后，vsCode 里就可以在左边的 source controll 里点击 `initialize repo`

![initRepo]({initRepo})

跟着提示选择您要公开自己的代码还是只让自己可见，然后上传 ⏫ 🎉

当你上传完成，可以去自己的 github 主页查看自己的工程。

### 4.2 发布网站到 vercel

- 用 github 登录 [Vercel](https://vercel.com/dashboard)
- 找到‘[添加工程](https://vercel.com/new)’ 英文是 ‘import project’。

![Vercel]({Vercel})

- 选择刚刚上传到 github 上的工程
- 跟着安装步骤搭建工程。

# 恭喜！🎉

现在您已尽完成了自己的一个网站的搭建、开发、发布。

您还学习了如何快速安装 tailwind 到工程里。
