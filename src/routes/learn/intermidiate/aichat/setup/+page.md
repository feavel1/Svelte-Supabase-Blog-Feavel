---
layout: post
author: Feavel
date: 2022年2月8日
title: 创建AI工程
---

## Setup Svelte Kit and Open AI

```bash
npm create svelte@latest openAiChat
cd openAiChat
npx svelte-add@latest tailwindcss
npm i openai gpt3-tokenizer sse.js daisyui
```

这些代码我们下载了 openAI、Tailwind、daisyui。

现在我们配置一下 daisyui 吧

Add daisyUI to your `tailwind.config.js` files:

```js
module.exports = {
	//...
	plugins: [require('daisyui')]
};
```

```bash
npm i @sveltejs/adapter-vercel
```
