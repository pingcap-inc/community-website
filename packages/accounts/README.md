## 打包

- `build`: 生产打包
- `build:staging` 预览环境打包

生成文件名录为 `dist`

## 本地开发

注意，因为 vite 通过 es module 打包编译。在我们的实现里，我们依赖了 `@tidb-community/common` 等 monorepos 的编译生成的 es module 文件。所以为了保证我们对这些 monorepos 的修改能实时反应到 accounts 的页面更新上，开发时需要在 tug-website 签出的顶级目录执行如下两个命令：

- `npm run build:watch`
- `npm run start:accounts`

前者会监听 monorepos 文件的修改并实时编译生成其对应的 esm 和 cjs 文件。后者会在 3001 端口启动一个 vitejs server 。然后访问 [http://localhost:3001/login](http://localhost:3001/login) 页面，便可开始您的开发调试。

## 技术栈

- [vite](https://vitejs.dev/) 基于 `rollup` 与 `esbuild` 打包
- [react-router](https://reactrouter.com/web/guides/quick-start)
- styled-components
- antd
- [formik](https://formik.org/) + [yup](https://github.com/jquense/yup)

## 代码复用

- @tidb-community/common
- @tidb-community/datasource
- @tidb-community/ui

## 路由实现

[router.jsx](src/router.jsx) 实现了一个模拟 `nextjs` 目录结构的算法，会通过 `import.meta.glob`
自动生成路由页面结构。

## 表单实现

表单使用 `formik`、`formik-antd` 处理逻辑与 UI ，使用 `yup` 处理校验。

### 注册页实例

[register.form.js](src/pages/login/login.form.js) 定义了表单的数据，导出了以下变量：

- `form` 包含所有字段信息
- `formSchema` 包含所有所有校验信息
- `initialValues` 初始值对象

[page](src/pages/login/index.page.jsx) 实现了表单的 UI 结构。

#### 条件参数

schema 中通过 [conditionalField](../commons/utils/form.js) 方法定义条件字段（用于处理校验逻辑），并在对应 UI 中的`RouterItem`组件传入 prop
`hidden`来控制组件是否显示。

## [withLayout](../packages/common/hoc/layout.jsx)

该 hoc 用于把组件的 `Layout` 与 `layoutProps` 属性封装到组件外层。 该方法也会递归处理 layout 组件本身的 layout 属性。
