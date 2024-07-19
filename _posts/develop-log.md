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

**_2024/07/03 nextjs_**  
useRouter 存在缓存策略  
函数内调用 sql 时，若先调用了 cookie 或者 headers，会将数据更新，避免使用旧数据
