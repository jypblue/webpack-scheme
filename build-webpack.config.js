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

//入口文件夹
let srcDir = path.resolve(process.cwd(), 'src');
//发布版本文件夹
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
}());

let chunks = Object.keys(entries);

module.exports = (options) => {
  options = options || {};

  let debug = options.debug !== undefined ? options.debug : true;
  //publicPath是绝对路径
  let publicPath = './';
  let extractCSS, cssLoader, sassLoader;

  //自动生成入口文件，入口js名必须和入口文件名相同
  //例如：A页的入口文件是A.html,对应js目录下必须一个A.js作为入口文件

  let plugins = () => {
    let entryHtml = glob.sync(srcDir + '/*.html');
    let r = [];

    entryHtml.forEach((filePath) => {
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
      let conf = {
        template: 'html!' + filePath,
        filename: filename + '.html'
      };

      if (filename in entries) {
        conf.inject = 'body';
        conf.chunks = ['vender', 'common', filename];
      }

      if (/b|c/.test(filename)) {
        conf.chunks.splice(2, 0, 'common-b-c');
      }

      r.push(new HtmlWebpackPlugin(conf));
    });
    return r;
  }();

  //设定常用库本地加载不用每次都编译
  plugins.push(
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      _: 'lodash',
      $: 'jquery'
    })
  );

  //debug模式
  if (debug) {
    extractCSS = new ExtractTextPlugin('css/[name].css?[contenthash]');
    cssLoader = extractCSS.extract(['css']);
    sassLoader = extractCSS.extract(['css', 'sass']);

    plugins.push(extractCSS, new webpack.HotModuleReplacementPlugin());

  } else {
    extractCSS = new ExtractTextPlugin('css/[contenthash:8].[name].min.css', {
      //当allChunks指定为false时，css loader必须指定怎么处理
      //additional chunk 所依赖的css,即指定‘ExtractTextPlugin.extract()’
      //第一个参数'notExtractLoader',一般是使用style-loader
      //extract-text-webpack-plugin
      allChunks: false

    });

    cssLoader = extractCSS.extract(['css?minimize']);
    sassLoader = extractCSS.extract(['css?minimize'], 'sass');

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
          except: ['$', 'exports', 'require']
        }
      }),

      new webpack.optimize.DedupePlugin(),
      new webpack.NoErrorsPlugin()

    );

    plugins.push(new UglifyJsPlugin());

  };

  let config = {
    entry: Object.assign(entries, {
      //将用到的公共库，加进vender中单独提取打包
      'vender': ['zepto', 'react', 'react-dom', 'antd']
    }),

    output: {
      path: dist,
      filename: debug ? '[name].js' : 'js/[chunkhash:8].[name].min.js',
      chunkFilename: debug ? '[chunkhash:8].chunk.js' : 'js/[chunkhash:8].chunk.min.js',
      hotUpdateChunkFilename: debug ? '[id].js' : 'js/[id].[chunkhash:8].min.js',
      publicPath: publicPath
    },

    resolve: {
      root: [srcDir, nodeModPath],
      alias: pathMap,
      extensions: ['', '.js[x]', '.css', '.scss', '.tpl', '.png', '.jpe?g']
    },

    module: {
      loaders: [
        //图片
        {
          test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9])) | (woff2?|svg|jpe?g|png|gif|ico)$/,
          //url-loader图片小于10k自动转成dataUrl，
          //否则调用file-loader,参数直接传入
          loaders: [
            'url?limit=10000&name=img/[hash:8].[name].[ext]',
            'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
          ]
        },
        //字体
        {
          test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])) | (ttf|eot)$/,
          loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
        },
        //模板
        {
          test: /\.(tpl|ejs)$/,
          loader: 'ejs'
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
        //jsx
        {
          test: /\.js[x]$/,
          loader: ['babel-loader'],
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      //可以自主添加提取
      new CommonsChunkPlugin({

      }),
      new CommonsChunkPlugin({

      }),
      new CommonsChunkPlugin({
        name: 'vender',
        chunks: ['common']
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
  if (debug) {
    ((entry) => {
      for (key of Object.keys(entry)) {
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
