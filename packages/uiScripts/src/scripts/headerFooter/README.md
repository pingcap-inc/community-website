# @tidb-community/uiScripts

本项目包装 `@tidb-community/ui`，打包 `react` 与 `react-dom` 以外的其他依赖，允许其他页面无需打包即可使用 header 和 footer 组件。

## 构建

项目依赖 `@tidb-community/ui` 和 `@tidb-community/datasource` 的 ES Module 输出，因此需要首先在这两个包下进行 `npm run build`。

依赖安装之后，使用 `npm run build` 进行构建，会在 `/public/scripts` 目录下生成 `community-ui.css` 和 `community-ui.js` 文件，会随着 `tug-website` 本体一同部署。

## 使用

构建生成的文件的公开链接应当为：

- https://tidb.io/scripts/header-footer.js
- https://tidb.io/scripts/header-footer.css

此外，由于 `react`、`react-dom`、`react-is` 和 `styled-components` 未被打包，需要在使用 `uiScripts` 的页面中引入。

完整的例子可见 [`./index.html`](./index.html)，本地预览可以通过：

```shell
cd tug-website
npm run dev
cd tug-website/packages/uiScripts
npx serve -l 5001
```

然后浏览器打开 [http://localhost:5001/](http://localhost:5001/)
