## webpack-scheme
use webpack and gulp to help write code like react es6 and sass

### webpack构建React,Redux,Sass,Es6前端开发环境

#### 1. 环境配置
1.安装node版本5.0以上

2.clone或者download本工程到本地

3.执行命令安装依赖包:

`cd webpack-scheme`

`npm install`

4.node-sass包会报错，解决方法是先添加淘宝NPM镜像cnpm环境：
`npm install -g cnpm --registry=https://registry.npm.taobao.org`

`cnpm install --save-dev node-sass`

即可安装好编写sass的依赖包

5.全局安装webpack,gulp,eslint:

`npm install webpack -g`

`npm install gulp -g`

`npm install eslant -g`


#### 2. 文件目录结构

``` js
.
                 # compass配置
├── gulpfile.js               # gulp任务配置                   
├── package.json              # 项目配置
├── README.md                 # 项目说明
├── server                    # 本地server
│   ├── app.js                # 本地server入口
│   ├── bin/                  # 本地命令文件夹	
│   ├── controllers/    	   # 本地controllers     
│   ├── models/               # 本地models 
│   ├── public/               # server资源目录
│   ├── routes/               #	 本地路由配置
│   ├── schemas               # 列出项目所有入口文件
│   └── views/                # 本地views
├── src                       # 源码目录
│   ├── XXX.html              # 入口文件
│   ├── css/                  # css资源
│   ├── fonts/                # 字体文件
│   ├── img/                  # 图片资源
│   ├── js                    # js&jsx资源
│   │   ├── X.js              # X页面入口
│   │   ├── index.js          # index页面入口
│   │   ├── rSlider.js        # rSlider页面入口
│   │   ├── action/			   # actions文件夹：存放可以发出的action
│   │   ├── components/       # 组件
│   │   ├── constants/        # 
│   │   ├── containers/       # 容器文件夹：存放容器组件
│   │   ├── reducers/         # reducers文件夹：存放action的处理器reducers
│   │   ├── store/            # 数据模型文件夹
│   │   ├── libs/             # 没有存放在npm的第三方库或者下载存放到本地的基础库，如jQuery、Zepto、React等
│   │   └── utils/            # 业务无关的辅助工具
│   ├── scss/                 # scss资源
│   ├── libsPath.json         # 手动配置某些模块的路径，可以加快webpack的编译速度
│   └── tmpl/                 # 模板目录，如果是React项目可以无视
├── webpack-build.config.js   # webpack配置
├── webpack.config.js         # 正式环境webpack配置入口
└── webpack-dev.config.js     # 开发环境webpack配置入口
```

#### 3. 使用须知
1. 新建html文件名与js根目录下文件名称一致
2. 运行开发环境命令：`npm run dev`
3. 运行sass监听命令：`gulp watch`
4. 生成release版本的时候，因为sass-loader的原因，不能直接在项目中引用，最好是开发的时候书写scss，写的同时运行`gulp watch`生成css文件，引入到js/jsx文件中来
5. 编译生成release版本命令：`gulp/npm run build`,release版本生成在dist文件目录下
6. 本地查看release版本命令：`npm run release`
7. 如果需要使用less开发，请自行添加目录，webpack-build.config.js添加了less支持
8. 如果使用了iconfont，css引入字体文件的地址会不准确，可以自行修改成相对目录或者绝对目录


#### 4. 目标
1. 后续会添加一些react-redux的例子进来
2. 添加koa+mongodb的server部分以后会逐渐整合进来，最终实现React+Redux+Koa+Mongodb的web开发技术栈


### 若对你有用，欢迎star,或者watch;welcome to star or watch.










































