# vu-admin
vue3+ant-design-vue开发的通用后台模板

```shell
创建项目
npm init && npm install
mkdir packages
npm init -y -w packages/vu -w packages/admin
```

# vu
公共组件项目
```shell
npx create vite ./packages/vu/my-vue-app --template vue-ts
然后手动调整package.json中的内容
```

# admin
后台业务项目
```shell
yarn create vite ./packages/admin/my-vue-app --template vue-ts
然后手动调整package.json中的内容
```