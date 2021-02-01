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

# Folder Structure

## pages
页面文件，next.js 将会自动根据该目录下的文件夹层次结构构建URL路由（基于文件系统的路由）

其中的 jsx 文件将会导出一个名为 getServerSideProps 的 async 函数，该函数将会在每次客户端请求时执行一次；getStaticProps 将会在 build 时执行一次。
这些函数都将在获取到数据后返回一个带有 props 属性的 object ，在默认导出函数的参数中可以获取到该函数所返回的数据。

因此该项目中通常将静态文案写在 getStaticProps 中。将动态通过 API 获取数据的流程写在 getServerSideProps 中。

若您要修改页面上的静态文案，例如标题等，则可以到相关页面下的 getStaticProps 函数中寻找相关字段进行修改。
若您要修改页面上的动态数据或者 API 地址，例如首页的热门问答 API 数据源，则可以到相关页面下的 getServerSideProps 函数中寻找相关业务逻辑代码进行修改

需要了解更多有关 next.js 获取数据的流程，可以参考 next.js 官方文档 [data-fetching](https://nextjs.org/docs/basic-features/data-fetching)
### pages/_app.jsx
该文件为全局 App 组件，其中导入了 Button.sass ，原因是 next.js 要求组件所附带的 css 样式必须为 css module，而该组件样式并非 css module，因此只能在该处全局导入。
另外还引入了一些 UI 框架的全局 CSS 文件

## data
数据文件存放目录
### data/tug_data.js
该数据文件默认导出一个 object 含有 /people 页面中的 TUG 会员信息。
### data/asktug_site.json
该文件来源于 [https://asktug.com/site.json](https://asktug.com/site.json) 需要在 AskTUG 网站有相关论坛版块信息更新后手动更新（后续可考虑通过 CircleCI 定时更新该数据）

首页问答中通过 API 获取的帖子信息中只包含论坛版块ID，不包括具体版块信息，因此需要依赖该文件获取相关论坛板块信息。
### data/banner.js
首页 banner 轮播图的相关数据
### data/events.js
首页 TUG 活动信息数据
### data/navbar.js
导航栏数据
### data/footer.js
底部页脚链接数据
### data/social.js
底部页脚社交平台渠道数据

## component
相关组件，其中小写开头的目录名为该目录名所对应的 page 的组件，并非通用组件

## public
该目录下存放相关静态资源，例如图片，icon等。如需要修改，请对应页面或者组件代码中的路径进行修改。

## styles
该目录存放相关样式表，其中 global.css 有副作用，其他文件均为 variable 或者 mixin 声明代码 

## utils.js
工具函数

## tug.config.js
存放网站相关配置信息

## next.config.js
next.js 配置文件，可重写 webpack 以及相关工具链的配置

# Deploy
TODO
