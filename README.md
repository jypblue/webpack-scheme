### webpack-scheme
>use webpack and gulp to help write react redux es2015 and sass
>
> webpack构建React,Redux,Sass,Es2015前端原型脚手架

webpack版本为<strong style="color:green"> 2.x.x </strong>

#### 1. 环境配置
1. 安装node版本6.0以上
2. clone或者download本工程到本地
3. 执行命令安装依赖包:

```
cd webpack-scheme
npm install
```
4. 如果node-sass过程中报错导致无法安装，解决方法就是添加淘宝NPM镜像cnpm环境，然后以cnpm重新安装node-sass：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install --save-dev node-sass
```
5. 全局安装webpack, gulp, eslint:

```
npm install webpack -g

npm install gulp -g

npm install eslint -g

```

#### 2. 文件目录结构

```
├── gulpfile.js               # gulp任务配置
├── package.json              # 项目配置
├── README.md                 # 项目说明
├── server                    # 本地server
│   ├── app.js                # 本地server入口
│   ├── routes/               # 后端路由文件夹
│   ├── mock                  # 后端模拟数据文件夹
│   └── views/                # 后端views文件夹
├── src                       # 源码目录
│   ├── xxx.html              # xxx入口文件
│   ├── css/                  # css文件夹
│   ├── fonts/                # 字体文件
│   ├── img/                  # 图片文件夹
│   ├── js                    # js&jsx文件夹
│   │   ├── xxx.js            # xxx页面入口js/jsx文件
│   │   ├── action/           # Action Creators文件夹：存放可以触发的action函数
│   │   ├── components/       # React展示组件文件夹
│   │   ├── constants/        # Action 大写字符串描述事件
│   │   ├── containers/       # 容器文件夹：存放容器组件
│   │   ├── reducers/         # reducers文件夹：存放action的处理器reducers
│   │   ├── store/            # store文件夹
│   │   └── utils/            # 前端路由文件夹
│   ├── scss/                 # scss文件夹
│   ├── libsPath.json         # 手动配置某些模块的路径，可以加快webpack的编译速度
├── webpack-build.config.js   # webpack基本配置
├── webpack.config.js         # 正式环境webpack配置入口
└── webpack-dev.config.js     # 开发环境webpack配置入口
```

#### 3. 使用须知

1. 新建html文件名与js根目录下js/jsx文件名称一致
2. 启动dev模式命令：`npm run dev`
3. 编译生成release版本命令：`gulp/npm run build`, release版本代码在dist文件目录下
4. 本地查看release版本命令：`npm run release`
5. 如果需要使用less开发，请自行添加相关模块，webpack-build.config.js添加了less支持
6. release版本生成时，如果使用了iconfont，dist文件夹下css引入文件的url会不准确。如果需要，请自行修改成正确的相对路径或者绝对路径
7. 本脚手架适当修改后可用sass编写原型


## 若对你有用，欢迎star,或者fork;  welcome to star or fork











































