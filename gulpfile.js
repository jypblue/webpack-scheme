/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 19:14:59
 * @describe
 * @version $Id$
 */
'use strict';
let gulp = require('gulp');
let webpack = require('webpack');
let gulputil = require('gulp-util');
// 加载webpack配置文件
let webpackconf = require('webpack.config.js');
let webpackdevconf = require('dev-webpack.config.js');

//js文件目录入口
let src = process.cwd() + '/src';
//文件发布版本
let dist = process.cwd() + '/dist';

//js check
gulp.task('lint', () => {
  let eslint = require('gulp-eslint');
  return gulp.src([
      '!' + src + '/js/lib/**/*.js',
      src + '/js/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

//clean dist
gulp.task('clean', ['lint'], () => {
  let clean = require('clean');
  return gulp.src(dist, {
    read: true
  }).pipe(clean());
});

//run webpack
gulp.task('pack', ['clean'], (done) => {
  webpack(webpackconf, (err, stats) => {
    if (err) {
      throw new gulputil.PluginError('webpack', err);
    }
    gulputil.log('[webpack]', stats.toString({
      colors: true
    }));
    done();
  })
})



gulp.task('default', ['pack']);
