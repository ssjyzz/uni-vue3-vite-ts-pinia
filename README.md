<!--
 * @Author: Betty.Gao
 * @Date: 2022-08-09 15:05:50
 * @LastEditors: Betty.Gao
 * @LastEditTime: 2022-08-30 11:55:45
 * @Description: README
-->
# uni-vue3-vite-ts-pinia
 uniapp 模板
 “uniapp-vue3-vite-ts-pinia-uview3.0（vkview）”
 
实现功能

-   <input type="checkbox" checked>使用 `Vue3` 进行开发</input>
-   <input type="checkbox" checked>构建工具 使用 `Vite`</input>
-   <input type="checkbox" checked>使用 `Pinia`实现数据持久化</input>
-   <input type="checkbox" checked>集成 `Typescript`</input>
-   <input type="checkbox" checked>集成 `Scss` 来编写 css</input>
-   <input type="checkbox" checked>集成 `Eslint` + `Stylelint` + `Prettier` 来规范和格式化代码</input>
-   <input type="checkbox" checked>环境区分</input>
-   <input type="checkbox" checked>集成 `uview`</input>

项目整体目录

```ts
├── dist/                   // 打包文件的目录
├── env/                    // 环境配置目录
|   ├── .env.development    // 开发环境
|   ├── .env.production     // 生产环境
├── src/
|   ├── static/             // 存放静态资源
|   ├── pages/              // 页面
|   ├── components/         // 自定义组件
|   ├── store/              // 全局状态管理
|   |   ├── index.ts        // store 配置文件
|   |   └── modules
|   |       └── user.ts     // 用户信息
|   ├── App.vue
|   ├── env.d.ts
|   ├── main.ts
|   ├── manifest.json
|   ├── pages.json
|   ├── shims-vue.d.ts
|   └── uni.scss
├── .eslintignore           // eslint忽略文件
├── .eslintrc.js            // eslint配置文件
├── .gitignore              // git忽略文件
├── .prettierrc             // prettier配置文件
├── .stylelintignore        // stylelint忽略文件
├── index.html
├── package.json
├── README.md
├── stylelint.config.js     // stylelint配置文件
├── tsconfig.json
└── vite.config.ts          // vite配置文件
```

```bash
npm i

npm run dev:mp-weixin

npm run build
```
