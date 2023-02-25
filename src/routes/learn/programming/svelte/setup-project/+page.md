---
layout: post
author: Feavel
date: 2022年2月25日
title: 快速Svelte工程
---

## 看完这篇你会学会：

- 安装必要的开发工具 🔧
- 使用终端下载软件包 💻
- 开发一个简单又漂亮的界面 🎨
- 学会把自己的网站上传到云上 ☁️

## 1. 安装必要的开发工具

在 [学习道理](/learn/programming/roadmap) 我有简单提到我使用的工具。但是我没有带大家一步一步安装。

### 1.1 安装 [VS Code](https://code.visualstudio.com) 软件：

![VS Code](/src/routes/learn/programming/svelte/setup-project/VSCodedownload.gif)

### 1.2 安装开源的 [Node.js](https://nodejs.org/en/)

- 必有的包管理器。在写这个文章时，最新版本是 19.7.0。

这个软件有多种安装方式，可以从官网下载，也可以用终端命令下载。要是你想用 Brew 管理器（推荐）。只需要两行代码：

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

## 搭建 [SvelteKit](https://kit.svelte.dev) 工程

在 svelteKit 的官网上，我们可以找到非常简约的安装流程，但是在这里我会和大家扩展一下安装包，这样我们就可以使用 ui 包等工具。

首先我们得按顺序在 vsCode 的终端里运行这些行的代码。

```bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev -- --open
```

- 第一行是用来安装必要的 Svelte 文件，比如说 routes 和配置文件。`my-app` 是您要创建的工程名，你可以改为`my-first-app`等名字

- 第二行是用来进入文件夹中，因为我们在安装的时候，终端会给我们创建一个文件夹。

- 第三行是用来下载`pakage.json`文件里表明的必要工具，比如说 svelte 引擎、Kit 引擎、eslint 检查工具等。

- 第四行诗用来运行工程。这样子你就能在浏览器内打开你的软件了。
