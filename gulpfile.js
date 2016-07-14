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
let webpackconf = require('./webpack.config.js');
//dev构建webpack配置文件
let webpackdevconf = require('./webpack-dev.config.js');

//js文件目录入口
let src = process.cwd() + '/src';
//文件发布版本
let dist = process.cwd() + '/dist';

//eslint check
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

//jshint check


//clean dist
gulp.task('clean', ['lint'], () => {
  let clean = require('gulp-clean');
  return gulp.src(dist, {
    read: true
  }).pipe(clean());
});

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
  })
})


gulp.task('default', ['pack']);

/*
gulp.task('default', ['pack'], () => {
  let replace = require('gulp-replace');
  let htmlmin = require('gulp-htmlmin');

  return gulp.src(dist + '/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(assets));
});
*/

//deploy dist to remote server
gulp.task('deploy', () => {
  let sftp = require('gulp-sftp');

  return gulp.src(dist + '/**')
    .pipe(sftp({
      host: '[remote server ip]',
      remotePath: '/www/app/',
      user: 'foo',
      pass: 'bar'
    }));
});

//因为webpack打release包事引用sass会出现问题，所以开发是可以写sass,开发完成后转化为css，
//引入css再转换生产包打包
require('colors');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var path = require('path');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var isBuild = true;

function err(error) {
  console.error('[ERROR]'.red + error.message);
  this.emit('end');
}
// 判断文件类型
var ifsass = function(file) {
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

gulp.task('code', function() {
  return gulp.src(['./src/**/*.js', './**/*.css', './**/*.html'])
    .pipe(plumber(err))
    .pipe(livereload());
});
//监听
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./src/scss/*.scss'], ['sass']);
});
