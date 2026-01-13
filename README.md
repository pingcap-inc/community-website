# TiDB User Group - website

[![Main workflow](https://github.com/pingcap-inc/tidb.io/actions/workflows/main.yml/badge.svg)](https://github.com/pingcap-inc/tidb.io/actions/workflows/main.yml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# copy-writing

### banner

- data/banner.js

### 列表公共信息

- data/asktug_site.json ( download from https://pingkai.cn/tidbcommunity/forum/site.json )

### 精选文章列表

- https://pingkai.cn/tidbcommunity/forum/c/blog/how-to/l/latest.json?order=default&page=0&per_page=10

### 用户实践列表

- https://pingkai.cn/tidbcommunity/forum/c/blog/practice/l/latest.json?order=default&page=0&per_page=10

### 原理解读列表

- https://pingkai.cn/tidbcommunity/forum/c/blog/theory/l/latest.json?order=default&page=0&per_page=10

### 热门问答列表

- https://pingkai.cn/tidbcommunity/forum/top/weekly.json?order=default&page=0&per_page=10

### /mva

- pages/mva.jsx
- data/tug.js -> mva2021
- data/tug.js -> mva2020
- data/tug.js -> mva2019

### /people

- pages/people.jsx
- data/tug.js -> tmc
- data/tug.js -> leader

# Folder Structure

## pages

页面文件，next.js 将会自动根据该目录下的文件夹层次结构构建 URL 路由（基于文件系统的路由）

其中的 jsx 文件将会导出一个名为 getServerSideProps 的 async 函数，该函数将会在每次客户端请求时执行一次；getStaticProps 将会在 build 时执行一次。
这些函数都将在获取到数据后返回一个带有 props 属性的 object ，在默认导出函数的参数中可以获取到该函数所返回的数据。

因此该项目中通常将静态文案写在 getStaticProps 中。将动态通过 API 获取数据的流程写在 getServerSideProps 中。

若您要修改页面上的静态文案，例如标题等，则可以到相关页面下的 getStaticProps 函数中寻找相关字段进行修改。
若您要修改页面上的动态数据或者 API 地址，例如首页的热门问答 API 数据源，则可以到相关页面下的 getServerSideProps 函数中寻找相关业务逻辑代码进行修改

需要了解更多有关 next.js 获取数据的流程，可以参考 next.js 官方文档 [data-fetching](https://nextjs.org/docs/basic-features/data-fetching)

### pages/\_app.jsx

该文件为全局 App 组件，其中导入了 Button.sass ，原因是 next.js 要求组件所附带的 css 样式必须为 css module，而该组件样式并非 css module，因此只能在该处全局导入。
另外还引入了一些 UI 框架的全局 CSS 文件

## data

数据文件存放目录

数据文件中所有图片路径均相对于 public 目录，
例如你想在 Banner 轮播图中使用 `public/images/tugHome/banner-welcome.png` 这张图，
则需要在 `data/banners.js` 文件中的 imageUrl 字段填入 `/images/tugHome/banner-welcome.png` ，也就是不带 public 的路径。

数据文件也可以使用外部图片，
例如你可以在图片路径相关的字段中直接填入 `https://en.pingcap.com/static/1d8632a2b41f24161ffae995844556f2/pingcap-logo.svg`

请注意：所有 public 目录下的文件将都会对外发布。

### data/tug.js

该数据文件默认导出一个 object 含有 /people 页面中的 TUG 会员信息。

### data/asktug_site.json

该文件来源于 [https://pingkai.cn/tidbcommunity/forum/site.json](https://pingkai.cn/tidbcommunity/forum/site.json) 需要在 AskTUG 网站有相关论坛版块信息更新后手动更新（后续可考虑通过 CircleCI 定时更新该数据）

首页问答中通过 API 获取的帖子信息中只包含论坛版块 ID，不包括具体版块信息，因此需要依赖该文件获取相关论坛板块信息。

### data/banner.js

首页 banner 轮播图的相关数据

### data/events.js

首页 TUG 活动信息数据

### data/social.js

底部页脚社交平台渠道数据

## components

相关组件，其中小写开头的目录名为该目录名所对应的 page 的组件，并非通用组件

### SEO.jsx

该组件通过 next/Head 组件向 HTML 文档注入 SEO 相关信息
例如网站的 icon，网站作者，标题，描述信息，关键词，用于生成分享内容的元数据

其中 meta name 为 og 开头的为 Open Graph 协议所需字段，用于生成 Facebook 等社交平台的分享信息
其中 meta name 为 twitter 开头的为 Open Graph 协议所需字段，用于生成 Twitter 等社交平台的分享信息

### MyLink.jsx

判断是通过 href 还是 to 属性传入链接，正确返回 next/Link 组件或者 a 标签

### Container

页面容器组件，包括 normal 标准容器和 fluid 非固定容器。
前者不会占满整个屏幕宽度，后者会占满整个屏幕宽度。
其中对于 normal 容器，将会通过媒体查询功能获取屏幕宽度，根据不同的屏幕宽度选择不同的容器宽度。
具体的响应式策略请参考 Container.scss 代码以及该代码文件顶部的注释。

## public

该目录下存放相关静态资源，例如图片，icon 等。如需要修改，请对应页面或者组件代码中的路径进行修改。

## styles

该目录存放相关样式表，其中 global.css 有副作用，其他文件均为 variable 或者 mixin 声明代码

## utils.js

工具函数

## next.config.domains.js

next.js 配置文件，可重写 webpack 以及相关工具链的配置

# Deploy

## next.js

该项目使用 next.js 开发。
next.js 支持以两种方式发布

- 静态发布 `yarn build && yarn run export`
- 动态发布 `yarn build && yarn start`

静态发布意味着所有数据在 build 时就填充进 HTML 文件，并且生成纯静态 HTML 文件，可以直接交给 nginx 发布。
无论用户何时访问，数据永远定格在 build 的那一刻。

动态发布则是通过 yarn start 启动 next.js 内置的服务器，开始服务端动态渲染。
用户每次访问该网站，next.js 都会执行目标页面中的 getServerSideProps 函数获取数据并且填充进 HTML 然后返回给客户端。
数据是动态生成，可以保证实时性。

目前 TUG 网站线上版本为**动态发布**，
并且使用 pm2 这个 node.js 进程管理工具启动服务端渲染程序，
通过 nginx 反向代理 http://127.0.0.1:3000 将 SSR 服务端对外发布。

阅读后续内容前请先观察 package.json 文件中的 scripts 部分以及 /.circleci/config.yml

首次启动服务器时，需要运维人员手动执行 `npm run server:init` ，该命令通过 pm2 执行 npm start 启动一个名为 `tug-website-next-server` 的进程

后续如果代码仓库的 main 分支有新的变更，则会触发 CircleCI 执行 yarn build 构建新的服务端程序，并且通过 rsync 将最新构建的服务端程序同步至线上服务器，
然后 SSH 连接线上服务器，执行 `npm run server:reload` ，该命令通过执行 pm2 reload 重新载入名为 `tug-website-next-server` 的进程，实现平滑升级上线。

如果出现构建失败，请前往 [CircleCI 控制台](https://app.circleci.com/pipelines/github/pingcap/tug-website) 查看失败原因。
如果发布后访问线上版本出现 CSS，JS，图片错乱等情况，请手动通过 SSH 连接至线上服务器，通过 cd 命令进入服务端所在目录后，执行 `npm run server:reload` 。

## nginx

已部署 tidb.io 根域名 SSL 证书，并且在 443 端口监听所有请求。在 80 端口将所有请求强制重定向至 https 协议的同名路径下。
已开启 gzip

欲了解更多关于 nginx 的配置请直接参考线上服务器的 nginx 配置文件或者请教 SRE 同学。

## Sentry

如果设置了环境变量 `ENABLE_SENTRY=true` ，则会启用 Sentry 支持。此时运行 `yarn dev` 或 `yarn build` 时要求本地的 `sentry-cli` 正确配置并添加能够向 `pingcap/tug-website` 提交 source map 的 auth token，否则会报错。

启用后，运行 `yarn build` 时会自动将 source map 上传 Sentry，便于调试错误信息。使用 `yarn dev` 进行本地开发时，只会生成 source map，但不会向 Sentry 服务发送任何请求。尽管如此，仍然建议仅在 CI 环境启用 Sentry，如果需要测试 Sentry 配置本身，可使用环境变量覆盖 Sentry 相关设置，使用其他的 Sentry Project 进行测试。

开发 API 时，需要根据 [官方文档](https://docs.sentry.io/platforms/javascript/guides/nextjs/#configure) 的指示使用 `withSentry` 包裹 handler 函数。
