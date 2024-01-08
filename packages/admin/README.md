# vadmin
vue3+ant-design-vue开发的通用后模板

[vue官方文档](https://cn.vuejs.org/api/general.html)
[vite官方文档](https://cn.vitejs.dev/guide/env-and-mode.html)
[vite config](https://vitejs.dev/config/)
[vue-router](https://router.vuejs.org/zh/installation.html)
[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn)
[pinia](https://pinia.web3doc.top/getting-started.html)
[tsconfig.json](https://www.typescriptlang.org/tsconfig#files)
[yarn v2](https://yarnpkg.com/)
[pnpm](https://pnpm.io/zh/scripts)

# 创建项目，安装依赖
```shell
安装依赖
npm --workspace admin add vu

npm --workspace admin add -D vue-router@4
npm --workspace admin add -D pinia
npm --workspace admin add -D axios
npm --workspace admin add -D dayjs
npm --workspace admin add -D mitt
npm --workspace admin add -D ant-design-vue
npm --workspace admin add -D @ant-design/icons-vue
npm --workspace admin add -D @vueuse/core
npm --workspace admin add -D unplugin-auto-import
npm --workspace admin add -D unplugin-vue-components
npm --workspace admin add -D @types/node
npm --workspace admin add -D sass
npm --workspace admin add -D normalize.css


// 以下是lint之类的包，不强制
npm add -D stylelint stylelint-config-standard-scss  stylelint-config-recess-order

npm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

npm add -D eslint
npm add -D husky
npm add -D lint-staged
```