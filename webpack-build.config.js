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
const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//入口文件夹
const srcDir = path.resolve(process.cwd(), 'src');
//发布版本文件夹
const dist = path.resolve(process.cwd(), 'dist');
const nodeModPath = path.resolve(__dirname, './node_modules');
const pathMap = require('./src/libspath.json');

let entries = (() => {
  const jsDir = path.resolve(srcDir, 'js');
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

  const dev = options.dev !== undefined ? options.dev : true;
  //let dev = (process.env.NODE_ENV === 'production' || options.dev !== undefined) ? false : true;
  //publicPath是绝对路径
  //release模式可以在publicPath前加"."，开发模式不能加，否则有bug。
  //dev模式的时候去掉点".",发布版本是添加".";
  const publicPath = '/';
  let extractCSS;
  let cssLoader;
  let sassLoader;
  let lessLoader;

  //自动生成入口文件，入口js名必须和入口文件名相同
  let plugins = (() => {
    let entryHtml = glob.sync(srcDir + '/*.html');
    let filesArr = [];

    entryHtml.forEach((filePath) => {
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
      let conf = {
        template: 'html!' + filePath,
        filename: filename + '.html'
      };

      // 添加chunk模块，以及html中引入顺序
      if (filename in entries) {
        conf.inject = 'body';
        conf.chunks = ['vender', 'common', filename];
      }

      if (filename.indexOf('rx') !== -1) {
        //conf.chunks.splice(2, 0, 'redux');
      }

      filesArr.push(new HtmlWebpackPlugin(conf));
    });
    return filesArr;
  })();

  //dev模式
  if (dev) {
    extractCSS = new ExtractTextPlugin('css/[name].css?[contenthash]');
    cssLoader = extractCSS.extract(['css']);
    sassLoader = extractCSS.extract(['css', 'sass']);
    lessLoader = extractCSS.extract(['css', 'less']);

    plugins.push(extractCSS, new webpack.HotModuleReplacementPlugin());
  } else {
    extractCSS = new ExtractTextPlugin('css/[name].min.[contenthash:8].css', {
      allChunks: false
    });

    cssLoader = extractCSS.extract(['css?minimize']);
    sassLoader = extractCSS.extract(['css?minimize'], 'sass');
    lessLoader = extractCSS.extract(['css?minimize'], 'less');

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

      //dll
      // new webpack.DllReferencePlugin({
      //   context: path.join(__dirname, "dll"),
      //   manifest: require("./dll/vendor-manifest.json")
      // }),
      new webpack.optimize.DedupePlugin(),
      new webpack.NoErrorsPlugin()

    );
  };

  let config = {
    //devtool: 'inline-source-map',
    entry: Object.assign({
      //将用到的公共库，加进vender中单独提取打包
      'vender': ['react', 'react-dom'],
      'redux': ['redux', 'react-redux']
    }, entries),

    output: {
      path: dist,
      filename: dev ? '[name].js' : 'js/[name].min.[chunkhash:8].js',
      chunkFilename: dev ? 'chunk.[chunkhash:8].js' : 'js/chunk.min.[chunkhash:8].js',
      hotUpdateChunkFilename: dev ? '[id].js' : 'js/[id].min.[chunkhash:8].js',
      publicPath: publicPath
    },

    resolve: {
      root: [srcDir, nodeModPath],
      alias: pathMap,
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
            'url?limit=10000&name=img/[name].[hash:8].[ext]'
            //'image?{bypassOndev:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
          ]
        },
        //字体
        {
          test: /\.((ttf|eot|woff|svg)(\?t=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff|svg)\??.*$/,
          //loader: 'url?limit=10000&name=fonts/[name].[hash:8].[ext]'
          loader: 'url?limit=10000&name=fonts/[name].[ext]'
        },
        //css
        {
          test: /\.css$/,
          loader: cssLoader
        },
        //sass
        {
          test: /\.(scss|sass)$/,
          loader: sassLoader
        },
        //less
        {
          test: /\.less$/,
          loeader: lessLoader
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

      // //可以自主添加提取公共部分，拆分包以免包过大
      // new CommonsChunkPlugin({
      //   name: 'redux',
      //   chunks: ['rxInput', 'rxCounter']
      // }),
      new CommonsChunkPlugin({
        names: ['vender'],
        minChunks: Infinity
          //chunks: ['rxInput', 'rxCounter', 'rxTodo', 'Tabs', 'rxReddit']
      })
      // new CommonsChunkPlugin({
      //   name: 'vender',
      //   chunks: ['2048', 'formUpload', 'rSlider', 'Todo']
      // })

    ].concat(plugins),

    devServer: {
      //hot: true,
      noInfo: false,
      inline: true,
      publicPath: publicPath,
      stats: {
        cached: false,
        colors: true
      }
    }
  };

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