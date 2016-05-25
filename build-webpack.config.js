/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 17:11:32
 * @describe
 * @version $Id$
 */

'use strict';
let path = require('path');
let fs = require('fs');

let webpack = require('webpack');
let _ = require('lodash');
let glob = require('glob');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

let setDir = path.resolve(process.cwd(), 'src');
let dist = path.resolve(process.cwd(), 'dist');
let nodeModPath = path.resolve(__dirname, './node_modules');
let pathMap = Object.assign({
  'jquery': path.join(nodeModPath, '/jquery/dist/jquery.js'),
  'zepto': path.join(nodeModPath, '/zepto/zepto.min.js')
}, require('./src/pathMap.json'));

let entries = (() => {
  let jsDir = path.resolve(srcDir, 'js');
  let entryFiles = glob.sync(jsDir + '/*.{js,jsx}');
  let map = {};

  entryFiles.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = filePath;
  });

  return map;
})();

let chunks = Object.keys(entries);

module.exports = (options) => {
  options = options || {};

  let debug = options.debug !== undefined ? options.debug : true;
  //publicPath是绝对路径
  let publicPath = './';
  let extractCSS, cssLoader, sassLoader;

  //

};
