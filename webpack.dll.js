/*
 * @Author: jypblue
 * @Date:   2016-08-03 15:02:20
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-03 16:35:12
 */

'use strict';
const path = require("path");
const webpack = require('webpack');

const vendors = [
  'antd',
  'isomorphic-fetch',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-thunk',
];


module.exports = {
  output: {
    path: path.join(__dirname, "dll"),
    filename: '[name].[chunkhash].js',
    library: '[name]_[chunkhash]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dll", "[name]-manifest.json"),
      name: "[name]",
      context: path.resolve(__dirname, "dll"),
    }),
  ],
};
