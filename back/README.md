# vadmin
vue3+ant-design-vue开发的通用后模板

[vue官方文档](https://cn.vuejs.org/api/general.html)
[vite官方文档](https://cn.vitejs.dev/guide/env-and-mode.html)
[vite config](https://vitejs.dev/config/)
[vue-router](https://router.vuejs.org/zh/installation.html)
[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn)
[pinia](https://pinia.web3doc.top/getting-started.html)
[tsconfig.json](https://www.typescriptlang.org/tsconfig#files)

# 创建项目，安装依赖
```shell
npm create vite@latest vadmin -- --template vue-ts
然后移动内容到对应目录下

yarn add vue-router@4

yarn add ant-design-vue 
yarn add --save @ant-design/icons-vue

yarn add --save-dev sass

yarn add --save pinia

yarn add --save @vueuse/core
yarn add --save axios

yarn add--save dayjs

yarn add--save mitt

yarn add --save unplugin-auto-import
yarn add --save unplugin-vue-components 
// yarn add -D @types/node

yarn add --save normalize.css

yarn add -D stylelint stylelint-config-standard-scss stylelint-config-recess-order

yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

yarn add -D eslint

yarn add -D husky

yarn add -D lint-staged
```

```shell
import AutoImport from "unplugin-auto-import/vite"
plugins: [
		...,
		AutoImport({
			imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
			dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
		})
	],
```