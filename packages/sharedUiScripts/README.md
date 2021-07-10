# @tidb-community/sharedUiScripts

本项目包装 `@tidb-community/ui`，打包 `react` 与 `react-dom` 以外的其他依赖，允许其他页面无需打包即可使用 header 和 footer 组件。

## 构建

项目依赖 `@tidb-community/ui` 和 `@tidb-community/datasource` 的 ES Module 输出，因此需要首先在这两个包下进行 `npm run build`。

依赖安装之后，使用 `npm run build` 进行构建，会在 `/public/scripts` 目录下生成 `community-ui.css` 和 `community-ui.js` 文件，会随着 `tug-website` 本体一同部署。

## 使用

构建生成的文件的公开链接应当为：

- https://tidb.io/scripts/community-ui.js
- https://tidb.io/scripts/community-ui.css

此外，由于 `react` 和 `react-dom` 未被打包，需要在使用 `sharedUiScripts` 的页面中引入。可以使用 CDN ，比如 React 官方提供的：

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

然后，引入 `community-ui.js` & `community-ui.css`，并调用 `_tidb.sharedUI.initHeaderFooter` 初始化 header 和 footer，如：

```js
_tidb.sharedUI.initHeaderFooter({
  locale: 'zh',
  title: 'TiDB Community',
  logoSrc: 'https://tidb.io/images/community/logo.svg',
  headerEl: document.getElementById('header'),
  footerEl: document.getElementById('footer'),
});
```

需要注意初始化代码和对应元素在 HTML 文件中的顺序，或者使用 `onload` 事件等。

完整的例子可见 [`public/index.html`](public/index.html)。
