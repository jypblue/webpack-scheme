/*
 * @Author: jypblue
 * @Date:   2016-08-03 15:02:20
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-03 17:19:06
 */

'use strict';
const path = require("path");
const webpack = require('webpack');
const srcDir = path.resolve(process.cwd(), 'src');
const nodeModPath = path.resolve(__dirname, './node_modules');

const vendors = [
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-thunk',
];

const antd = [
  'antd',
  'isomorphic-fetch',
]

module.exports = {
  output: {
    path: path.join(__dirname, "dll"),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
    antd: antd
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dll", "[name]-manifest.json"),
      name: "[name]",
      context: path.resolve(__dirname, "dll"),
    }),
  ],
  resolve: {
    root: [srcDir, nodeModPath],
    modulesDirectories: ["node_modules"]
  }
};
