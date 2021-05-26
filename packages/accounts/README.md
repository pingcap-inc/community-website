## 打包

- `build`: 生产打包
- `build:staging` 预览环境打包

生成文件名录为 `dist`

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
- `formScheme` 包含所有所有校验信息
- `initialValues` 初始值对象

[page](src/pages/login/index.page.jsx) 实现了表单的 UI 结构。

#### 条件参数

scheme 中通过 [conditionalField](../commons/utils/form.js) 方法定义条件字段（用于处理校验逻辑），并在对应 UI 中的`RouterItem`组件传入 prop
`hidden`来控制组件是否显示。

## [withLayout](../packages/common/hoc/layout.jsx)

该 hoc 用于把组件的 `Layout` 与 `layoutProps` 属性封装到组件外层。 该方法也会递归处理 layout 组件本身的 layout 属性。
