/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 23:04:13
 * @describe
 * @version $Id$
 */

'use strict';

const fs = require('fs');
const path = require('path');
const render = require('koa-ejs');
const proxy = require('koa-proxy');
const serve = require('koa-static');
const list = require('../mock/list');

module.exports = (router, app, staticDir) => {

  //demo
  router.get('/api/list', function*() {

    let query = this.query || {};
    let offset = query.offset || 0;
    let limit = query.limit || 10;
    let diff = limit - list.length;
    if (diff <= 0) {
      this.body = {
        code: 0,
        data: list.slice(0, limit)
      };
    } else {
      let arr = list.slice(0, list.length);
      let i = 0;

      while (diff--) {
        arr.push(arr[i++]);
      }

      this.body = {
        code: 0,
        data: arr
      };
    }
  });

  render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true
  });

  //home页
  router.get('/', function*() {
    /* body... */
    let pages = fs.readdirSync(staticDir);

    pages = pages.filter((page) => {
      return /\.html$/.test(page);
    });

    yield this.render('../views/home', {
      pages: pages || []
    });

  });

  router.get('/api', function*() {
    this.body = 'nihao';
  });

};