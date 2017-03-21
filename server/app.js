/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 23:03:48
 * @describe
 * @version $Id$
 */

'use strict';
//加载node模块
const http = require('http');
const path = require('path');
const util = require('util');

//加载koa框架模块
const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
const colors = require('colors');
const open = require('open');

//加载本地文件
const pkg = require('../package.json');
const env = process.argv[2] || process.env.NODE_ENV;
const dev = 'production' !== env;
const viewDir = dev ? 'src' : 'dist';
const staticDir = path.resolve(__dirname, '../' + (dev ? 'src' : 'dist'));
//加载routes
const routes = require('./routes/routes.js');

//初始化
let app = koa();

//基本设定
app.keys = [pkg.name, pkg.description];
app.proxy = true;

//全局事件监听
app.on('error', (err, ctx) => {
  err.url = err.url || ctx.request.url;
  console.error(err, ctx);
});

app.use(function*(next) {
  if (this.url.match(/favicon\.ico$/)) {
    // statement
    this.body = '';
  }

  yield next;
});

//日志
app.use(function*(next) {
  /* body... */
  console.log(this.method.info, this.url);
  yield next;
});

//使用路由
routes(router, app, staticDir);
app.use(router.routes());

//dev 模式
if (dev) {
  // statement
  const webpackDevMiddleware = require('koa-webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConf = require('../webpack-dev.config.js');
  const compiler = webpack(webpackConf);

  //使用koa做服务器配置koa-webpack-dev-middleware
  app.use(webpackDevMiddleware(compiler, webpackConf.devServer));

  //配置webpack-hot-middleware实现hot module replace
  const hotMiddleware = require('webpack-hot-middleware')(compiler);

  //koa 对webpack-hot-middleware做适配
  app.use(function*(next) {
    yield hotMiddleware.bind(null, this.req, this.res);
    yield next;
  });
}

//使用src/dist目录
app.use(serve(staticDir, {
  maxage: 0
}));

app = http.createServer(app.callback());
app.listen(pkg.server.port, '127.0.0.1', () => {
  const url = util.format('http://%s:%d', 'localhost', pkg.server.port);
  console.log('Listening at %s', url);
  open(url);
});

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  dev: 'blue',
  error: 'red'
});