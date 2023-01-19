---
title: 贡献
author: Feavel
date: 2023年1月19日
layout: post
---

## 贡献流程:

1. 在 Github 创建 Pull Request 下载这个代码
2. 查看 README.md 之后熟悉工程结构和开发环境
3. 创建改变之后您可以发送自己的改变，我会查看并审核您做的改变
4. 完整的流程与方法还在研发，但是有些功能您可以帮忙优化 ⚠️

## 找到自己要创建的内容文件夹 📁

创建之前，你得确认自己内容类型

1. 比如说要是要写关于学习音乐制作，那么...

学习 / 音乐 / 制作 / ... 的文件路径在

```
src/routes/learn/muisc/production/...
```

那么学习精神分析的文件就在

```
src/routes/learn/psychoanalysis/...
```

当你确认自己内容类型和位置之后，就可以开始创建内容啦 🎉

## 创建页面内容方式：

1. 在对应的路径下创建一个文件夹，并添加+page.md

比如说我的内容是 学习 / 精神分析 / 拉康 / 图表 1 / 词汇 ）那么对应的+page.md 文件就会在...

```
src/routes/learn/psychoanalysis/lacan/graph1/volcabulary/+page.md
```

参考 - 本页文件格式为：

````md
---
title: 贡献
author: feavel
date: 2023 年 1 月 19 日
layout: post
---

## 贡献流程:

1. 在 Github 创建 Pull Request 下载这个代码
2. 查看 README.md 之后熟悉工程结构和开发环境
3. 创建改变之后您可以发送自己的改变，我会尽量查看您的创作
4. 完整的流程与方法还在研发，但是有些功能您可以帮忙优化 ⚠️

## 创建哲学和音乐内容方式：

1. 创建一个文件夹，并添加+page.md。

参考 - 本页文件格式为：

```md
---
title: 贡献
author: Feavel
date: 2023年1月19日
layout: post
---

（这里就是先有鸡还是先有蛋）
```
````

2. 添加完了内容之后，您可以在对应的主页创建链接

比如说内容为音乐制作，就在[/learn/music/production/+page.md](/learn/music/production) 中添加一下代码：

```md
# Learn Production

<a href="/learn/music/production/1">Chapter 1</a>
<a href="(您创建的页面的链接)">您创建的页面的名称</a>
```
