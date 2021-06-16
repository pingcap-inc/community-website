# community-ui-wrap

本项目包装 `@tidb-community/ui`，打包 `react` 与 `react-dom` 以外的其他依赖，允许其他页面无需打包即可使用 header 和 footer 组件。

使用方法：

1. `npm install` 安装本包的依赖。
2. `npm run build` 进行构建，生成 `build/static/css/community-ui.css` 和 `build/static/js/community-ui.js` 文件。
3. 将这两个文件的链接放到需要使用组件的页面中，必须置于 `react` 和 `react-dom` 的引入之后。关于 React 的公用 CDN 链接，可以参考 [官方文档](https://reactjs.org/docs/cdn-links.html)。
4. 在需要 header 和 footer 的文件中加入用于放置组件的根元素，内容与 `public/index.html` 中相同。

注意：

- 本项目仅供 [CPT-262](https://community-product.atlassian.net/browse/CPT-262) 使用。
- 为保证兼容性，`package.json` 中的库版本应保持与 [`tug-website`](https://github.com/pingcap/tug-website) 相同。
- 为了使用方便，特意使用 `craco` 修改构建脚本，保证输出单个不带 chunk 的文件，应当根据需求调整。
- 由于引入了 `antd`， `community-ui.js` 文件大小极大，有待优化。
- `index.js` 中的大部分代码来自 `tug-website` 中的拼凑，应当及时进行更新。
