/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-20 20:41:41
 * @version $Id$
 */

/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 17:11:32
 * @describe
 * @version $Id$
 */

'use strict';

const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const glob = require('glob');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//入口文件夹
const srcDir = path.resolve(process.cwd(), 'src');
//发布版本文件夹
const dist = path.resolve(process.cwd(), 'dist');
const nodeModPath = path.resolve(__dirname, './node_modules');

let entries = (() => {
  let clientDir = path.resolve(srcDir, 'client');
  let entryFile = glob.sync(clientDir + '/index.{js,jsx}');
  let map = {};
  entryFile.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = filePath;
  });
  return map;
})();

let chunks = Object.keys(entries);

module.exports = (options) => {
  options = options || {};

  //let dev = options.dev !== undefined ? options.dev : true;
  let dev = (process.env.NODE_ENV === 'production' || options.dev !== undefined) ? false : true;
  //publicPath是绝对路径
  //release模式可以在publicPath前加"."，开发模式不能加，否则有bug，这是sass-loader的bug。
  //dev模式的时候去掉点".",发布版本是添加".";
  let publicPath = '/';
  let extractCSS;
  let cssLoader;

  let plugins = (() => {
    let filesArr = [];
    return filesArr;
  })();

  //dev模式
  if (dev) {
    extractCSS = new ExtractTextPlugin('css/[name].css?[contenthash]');
    cssLoader = extractCSS.extract('style', ['css']);
    plugins.push(extractCSS, new webpack.HotModuleReplacementPlugin());
  } else {
    extractCSS = new ExtractTextPlugin('css/[name].css', {
      allChunks: false
    });

    cssLoader = extractCSS.extract('style', ['css?minimize']);

    plugins.push(
      extractCSS,
      new UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        },
        mangle: {
          except: ['$', 'exports', 'require', 'import']
        }
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.NoErrorsPlugin()

    );

  };
  let devtool = dev ? 'inline-source-map' : 'source-map';
  let config = {
    devtool: devtool,
    entry: Object.assign(entries, {
      //将用到的公共库，加进vender中单独提取打包
      'vender': ['react', 'react-dom']
    }),

    output: {
      path: dist,
      filename: '[name].js',
      chunkFilename: 'chunk.js',
      hotUpdateChunkFilename: '[id].js',
      publicPath: publicPath
    },

    resolve: {
      root: [srcDir, nodeModPath],
      extensions: ['', '.js', '.jsx', '.css', '.scss', '.tpl', '.png', '.jpg', '.jpeg']
    },

    module: {
      loaders: [
        //图片
        {
          test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
          //url-loader图片小于10k自动转成dataUrl，
          //否则调用file-loader,参数直接传入
          loaders: [
            'url?limit=10000&name=img/[hash:8].[name].[ext]'
          ]
        },
        //字体
        {
          test: /\.((ttf|eot|woff|svg)(\?t=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff|svg)\??.*$/,
          loader: 'url?limit=10000&name=fonts/[name].[ext]'
        },
        //css
        {
          test: /\.css$/,
          loader: cssLoader
        },
        //jsx
        {
          test: /\.(jsx|js)$/,
          loader: ['babel-loader'],
          query: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: [
              ['antd', {
                'style': 'css'
              }]
            ]
          },
          exclude: /node_modules/
        }
      ]
    },

    plugins: [
      //可以自主添加提取公共部分，拆分包以免包过大
      new CommonsChunkPlugin({
        name: 'vender',
        chunks: ['index']
      })

    ].concat(plugins),

    devServer: {
      hot: true,
      noInfo: false,
      inline: true,
      publicPath: publicPath,
      stats: {
        cached: false,
        colors: true
      }
    }
  };

  //为实现webpack-hot-middleware做相关配置
  //https://github.com/glenjamin/webpack-hot-middleware
  if (dev) {
    ((entry) => {
      for (let key of Object.keys(entry)) {
        // statement
        if (!Array.isArray(entry[key])) {
          entry[key] = Array.of(entry[key]);
        }
        entry[key].push('webpack-hot-middleware/client?reload=true');
      }
    })(config.entry);

    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new webpack.NoErrorsPlugin());
  }

  return config;
};
