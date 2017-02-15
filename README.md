# v2ex-vue2-clone

> A Vue.js project

## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

api on localhost:3000: 
node --harmony server.js
```

visit localhost:8080

>用到的v2ex api

| 地址                                               | 作用         |
| -------------------------------------------------- | ------------:|
| https://www.v2ex.com/api/topics/latest.json        | 获得最新十条 |
| https://www.v2ex.com/api/topics/hot.json           | 获得最热十条 |
| https://www.v2ex.com/api/topics/show.json?node_id= | 获得节点内容 |
