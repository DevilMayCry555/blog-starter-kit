---
title: "Developer"
excerpt: "Document problems encountered during development."
coverImage: "/assets/kongdong.jpeg"
date: "2030-08-12"
author:
  name: L.D.T
  picture: "/assets/blog/authors/ly.jpg"
ogImage:
  url: "/assets/blog/love-diary/cover.jpg"
---

**_2024/07/23 nextjs_**  
vercel 不充 vip 的话，请求的持续时间不能超过 10s，如果想做实时的内容，不能依托于它。  
发现了 Ably 这个小宝贝，可以免费调用 ws 服务，太帅了

**_2024/07/03 nextjs_**  
useRouter 存在缓存策略，函数内调用 sql 时，若先调用了 cookie 或者 headers，会将数据更新，避免使用旧数据
