/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 23:03:48
 * @describe
 * @version $Id$
 */

"use strict";
//加载node模块
let http = require('http');
let path = require('path');
let util = require('util');

//加载koa框架模块
let koa = require('koa');
let router = require('koa-router')();
let serve = require('koa-static');
let colors = require('colors');
let open = require('open');

//加载本地文件
let pkg = require('../package.json');
let env = process.argv[2] || process.env.NODE_ENV;
let debug = 'production' !== env;
let viewDir = debug ? 'src' : 'dist';
let staticDir = path.resolve(__dirname, '../' + (debug ? 'src' : 'dist'));

//加载routes
let routes = require('./config/routes.js');

//初始化
let app = koa();

//基本设定
app.keys = [pkg.name, pkg.description];
app.proxy = true;

//全局事件监听
app.on('error', (err, ctx) => {

})
