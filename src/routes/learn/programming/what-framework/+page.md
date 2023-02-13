---
layout: post
author: Feavel
date: 2022年2月13日
title: 我应该选什么框架？🧐
---

## 什么是个前端框架？

前端框架是为了帮助开发者更快捷和高效地开发 Web 应用程序而设计的一种软件工具。它提供了很多常用的功能，例如 UI 组件、路由控制、数据管理等，可以大大缩短开发周期和提高开发效率。

当选择前端框架时，一些需要考虑的因素包括：

- **社区活跃度**：是否有足够的开发者在使用和改进这个框架，这可以确保框架的长期更新和维护。
- **文档丰富度**：是否有详细的文档可以帮助开发者学习和使用框架。
- **性能**：是否能够在处理大量数据时保持高效的运行速度。
- **浏览器兼容性**：是否支持多种浏览器，以便可以在多种浏览器环境下运行。
- **可扩展性**：是否提供了方便扩展的接口，以便开发者可以根据需求定制和扩展框架。

选择一个框架可以让你开发：

- _网页、桌面应用（mac、win、linux）、手机缓存试应用（pwa）、手机应用（iOS、android）、小程序、还有很多前端应用。_

在 选择哪个 SSR 框架中，我讲更多关于这些应用端的开发。

最后，请注意，前端框架不是万能的，并不适用于所有项目，因此需要根据项目的具体需求和特点进行选择。

---

## 那么，我应该选择哪一个？

### 作者推荐：

- [Svelte](https://svelte.dev) - 一个非常新的框架

  - 优点：语言逻辑非常非常简洁，打包出来的工程不大，传递速度很快。编程效率很高。

  - 缺点：用的人暂时没有前两个多，偶尔搜索内容会比较难找到答案。

- [React](https://reactjs.org) - 一个非常非常流行的构建界面的 JavaScript 库.

  - 优点：使用的用户很多，类似的编程语言也多，很多开源的教程和包

  - 缺点：对比新框架编程没那么简洁/简单，需要练习一下才能搞明白很多东西

- [Vue.js](https://vuejs.org) - 用于构建用户界面的渐进式 JavaScript 框架

  - 优点：使用的用户第二多，在中国很多用户，很多开源的教程和包

  - 缺点：对比新框架编程没那么简洁/简单，需要练习以下才能搞明白信息传递逻辑

### 作者没用过的，但还是很多人使用的：

- [Angular](https://angular.io) - 谷歌用于构建复杂 Web 应用程序的综合框架
- [Solid js](https://www.solidjs.com) - 一个和 React 很相似，但是速度快很多倍的框架
- [Qwik.js](https://qwik.builder.io) - 一个和 React 很相似，但是打包下来的文件百分百的小

---

## 有什么学习途径？

### 学习前端框架的知识的途径有很多：

1. 官方文档：每个前端框架都有详细的官方文档，涵盖了框架的各种功能和用法。
2. 在线教程：很多网站，如 Codecademy、Udemy、 Coursera 等，都提供了前端框架的在线教程。
3. 技术博客：很多技术博客，如 Medium、Dev.to 等，都有专业的开发者分享前端框架的知识和经验。
4. 开源项目：参与一些开源项目，可以深入了解前端框架的实现原理和最佳实践。

### 对于学习开发的技巧，可以考虑以下几点：

实践：最好的学习方法就是实践，通过开发小项目来熟悉框架的功能和用法。

认真阅读文档：要仔细阅读框架的文档，了解每个功能的详细用法。

注重代码的可读性：在开发过程中注重代码的可读性，方便以后维护和理解。

学习社区：加入前端框架的社区，学习更多关于框架的知识和经验。

希望这些建议对你有所帮助，加油学习！

---

## 对比不使用框架(html+js)和使用框架(svelte)的代码

HTML/JS 是 HTML、CSS 和 JavaScript 的组合，可用于构建网页。 这是一个简单的 **“to-do list”** 应用程序的 HTML/JS 代码片段：

```html
<!-- index.html -->
<html>
	<head>
		<title>To-Do List</title>
	</head>
	<body>
		<h1>To-Do List</h1>
		<form>
			<input type="text" id="task" />
			<button type="submit">添加To-do</button>
		</form>
		<ul id="tasks"></ul>

		<script>
			const form = document.querySelector('form');
			const input = document.querySelector('input');
			const tasksList = document.querySelector('ul');

			form.addEventListener('submit', (event) => {
				event.preventDefault();
				const task = input.value;
				input.value = '';
				const newTask = `<li>${task}</li>`;
				tasksList.insertAdjacentHTML('beforeend', newTask);
			});
		</script>
	</body>
</html>
```

另一方面，Svelte 是用于构建 Web 应用程序的现代 JavaScript 框架。 它不同于传统框架，因为它在构建时将其组件编译成普通 JavaScript，从而导致更小的文件大小和更快的运行时性能。 下面是 Svelte 中同一个待办事项列表应用程序的代码片段：

这是使用 Svelte Kit **同样** 的代码：

```svelte
<!-- App.svelte -->
<script>
	let task = '';
	let tasks = [];

	function addTask() {
		tasks = [...tasks, task];
		task = '';
	}
</script>

<h1>To-Do List</h1>
<form on:submit|preventDefault={addTask}>
	<input bind:value={task} />
	<button type="submit">Add Task</button>
</form>
<ul>
	{#each tasks as task}
		<li>{task}</li>
	{/each}
</ul>
```

我们应该选择 Svelte 而不是纯 HTML/JS 的原因有几个：

- 易用性：Svelte 为编写组件提供了简单直观的语法，使开发人员更容易编写可维护和可重用的代码。

- 性能：与传统框架相比，Svelte 将组件编译成高度优化的 vanilla JavaScript，从而带来更快的运行时性能和更小的文件大小。
  反应性：Svelte 提供了一个内置的反应性系统，允许您以声明方式将数据绑定到 UI，从而更容易构建动态应用程序。

- 更少的抽象：与其他框架相比，Svelte 的抽象更少，因此更容易理解您的应用程序在幕后如何工作。

总之，如果您正在寻找一种快速直观的方式来构建 Web 应用程序，Svelte 是一个不错的选择。
