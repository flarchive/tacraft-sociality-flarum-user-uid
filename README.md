# 用户 ID 显示 flarum-user-uid

在用户卡片上显示用户的数字 ID。

## 功能

1. 用户主页的用户卡片「加入时间」下方显示 `用户 ID：<数字>`。
2. 只读取前端已加载的用户 ID，不新增接口、不增加数据库查询。
3. 跟随论坛语言，中文显示「用户 ID：」，英文显示「User ID:」。

## 安装

```sh
composer require tacraft-sociality/flarum-user-uid:@dev
php flarum extension:enable tacraft-sociality-user-uid
php flarum cache:clear
```

## 兼容性

- Flarum `^2.0`
- PHP `^8.2`

## 说明

前端通过 `extend('flarum/forum/components/UserCard', 'infoItems', …)` 在 `infoItems` 里以 priority 60 插入一项；`UserCard` 是懒加载模块，所以用模块路径字符串注册，Flarum 会在模块加载完成后再挂钩子。
