# Jiye · 文字与笔记

个人博客与公开笔记。网站地址：**https://jiyesun.github.io/**

网站使用 GitHub Pages 自带的 Jekyll 生成。**日常写作不需要在电脑安装软件，直接在 GitHub 网页上操作即可。**

## 发布一篇新笔记

1. 打开 [`_posts` 文件夹](https://github.com/JiyeSun/JiyeSun.github.io/tree/main/_posts)。
2. 选择 **Add file → Create new file**。
3. 文件名用「日期 + 英文短名 + .md」，例如 `2026-10-18-my-first-note.md`。日期改成实际发布日期，英文部分使用字母、数字和连字符。
4. 复制下面的模板，改标题、简介、日期和正文。
5. 点击 **Commit changes**，保存到 `main`。网站会自动更新，通常需要几分钟。

~~~markdown
---
title: "我的第一篇笔记"
description: "用一句话介绍这篇内容。"
date: 2026-10-18
kind: note
tags: [随手记]
published: true
---

在这里写正文。

## 一个小标题

可以使用 **加粗**、[链接](https://example.com)，也可以直接写几段话。
~~~

- `kind: note` 放在「短笔记」；`kind: blog` 放在「文章」。
- `tags` 是标签，例如 `[阅读, 学习]`；也可以用 `[]`。
- 日期请使用当天或过去的日期。未来日期的文章不会提前显示，到日期后也需要再次提交更改才能触发更新。
- `published: false` 会从网站隐藏文章。**仓库是公开的，文件本身仍能在 GitHub 被看到。私密笔记应保存在仓库之外。**

也可以直接对助手说：「帮我把下面这段内容发布到我的博客，作为短笔记。」

## 修改或删除旧文章

打开 `_posts` 中对应文件，点击铅笔按钮，修改后选择 **Commit changes**。删除文件后，下次网站发布也会移除该页面。文件名的英文短名决定文章网址，已发布后建议保留。

## 两篇示例内容

网站起步时带有两篇明确标注为「示例」的内容，仅展示排版，不代表 Jiye 的真实经历或观点。可以直接替换它们，再将 `sample: true` 改为 `sample: false`；也可以删除后新增自己的文章。

空白模板在 [`templates/post.md`](templates/post.md)，模板文件不会出现在网站上。

## 插入图片

将图片上传到 `assets/images/` 文件夹，然后在正文中写：

~~~markdown
![图片说明](/assets/images/photo.jpg)
~~~

## 调整网站

| 想改什么 | 对应文件 |
| --- | --- |
| 首页介绍 | `index.html` |
| 关于页 | `about.html` |
| 网站标题和简介 | `_config.yml` |
| 导航和页脚 | `_layouts/default.html` |
| 颜色、字体和排版 | `assets/main.css` |

## 发布设置

仓库 **Settings → Pages**：

- Source：**Deploy from a branch**
- Branch：**main**
- Folder：**/ (root)**

更新 `main` 后，GitHub 自动生成网站。到 **Actions** 查看 `pages build and deployment`，绿色勾号表示发布完成。首页、分类页、文章页、RSS 和网站地图随文章自动更新。

文章模板采用标准 Markdown。首页和导航只用 HTML、CSS 与 GitHub 内置模板；搜索仅在当前列表中匹配标题、简介和标签。无需数据库、额外服务器或付费插件。
