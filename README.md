# management-jz

> backend management

## Build Setup

``` bash
# install dependencies
npm install

#ESLint格式化代码后在运行代码，不执行可能会报错
npm run lint

# serve with hot reload at localhost:8060
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 账号
* admin
* macio123

## 配置测试地址
* src->config->dev-env.js
```
// 修改BASE_API地址即可
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://192.168.1.11:8010"'
  BASE_API: '"http://106.13.60.199/mall"'
})
```
