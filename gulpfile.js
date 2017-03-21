/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 19:14:59
 * @describe
 * @version $Id$
 */

'use strict';
const gulp = require('gulp');
const webpack = require('webpack');
const gulputil = require('gulp-util');
const colors = require('colors');
// 加载webpack配置文件
const webpackconf = require('./webpack.config.js');
//dev构建webpack配置文件
//const webpackdevconf = require('./webpack-dev.config.js');

//js文件目录入口
const src = process.cwd() + '/src';
//文件发布版本
const dist = process.cwd() + '/dist';

//eslint check
gulp.task('lint', () => {
  const eslint = require('gulp-eslint');
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
  const clean = require('gulp-clean');
  return gulp.src(dist, {
    read: true
  }).pipe(clean());
});

//webpack dll 预留

//run webpack
gulp.task('pack', ['clean'], (done) => {
  //开发版本webpackdevconf,生产版本webpackconf
  //生成release版本时检查是否使用sass因为sass-loader有问题，所以最好还是原生css用于生产
  webpack(webpackconf, (err, stats) => {
    if (err) {
      throw new gulputil.PluginError('webpack', err);
    }
    gulputil.log('[webpack]', stats.toString({
      colors: true
    }));
    done();
  });
});


gulp.task('default', ['pack']);

//因为webpack打release包事引用sass会出现问题，所以开发是可以写sass,开发完成后转化为css，
//引入css再转换生产包打包
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const path = require('path');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');

function err(error) {
  console.error('[ERROR]'.red + error.message);
  this.emit('end');
}
// 判断文件类型
const ifsass = function(file) {
  var extname = path.extname(file.path);
  return extname === '.scss' ? true : false;
};
gulp.task('sass', function() {
  gulp.src('./src/scss/*.scss')
    .pipe(plumber())
    .pipe(gulpif(ifsass, sass()))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./src/css/components/'));
});

//监听
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./src/scss/*.scss'], ['sass']);
});