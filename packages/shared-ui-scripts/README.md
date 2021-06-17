# community-ui-wrap

本项目包装 `@tidb-community/ui`，打包 `react` 与 `react-dom` 以外的其他依赖，允许其他页面无需打包即可使用 header 和 footer 组件。

使用方法：

1. `npm install` 安装本包的依赖。
2. `npm run build` 进行构建，在根目录下生成 `public/scripts/community-ui.css` 和 `public/scripts/community-ui.js` 文件。
3. 将这两个文件的链接放到需要使用组件的页面中，必须置于 `react` 和 `react-dom` 的引入之后。关于 React 的公用 CDN 链接，可以参考 [官方文档](https://reactjs.org/docs/cdn-links.html)。
4. 在需要 header 和 footer 的文件中加入用于放置组件的根元素，以及初始化用的代码，内容参考 `public/index.html` 。
