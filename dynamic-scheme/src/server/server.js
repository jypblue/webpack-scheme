/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-21 15:50:36
 * @version $Id$
 */
import express from 'express';

import open from 'open';
import colors from 'colors';
let path = require('path');
let env = process.argv[2] || process.env.NODE_ENV;
let dev = 'production' !== env;
let viewDir = dev ? 'src' : 'dist';
let staticDir = path.resolve(__dirname, '/../../' + (dev ? 'src' : 'dist'));

import React from 'react';
import {
  renderToString
} from 'react-dom/server';
import {
  RouterContext,
  match
} from 'react-router';
import {
  Provider
} from 'react-redux';
import createLocation from 'history/lib/createLocation';

import {
  fetchComponentDataBeforeRender
} from '../common/api/fetchComponentDataBeforeRender';
import configureStore from '../common/store/configureStore';

import {
  getUser
} from '../common/api/user';
import routes from '../common/utils/routes';
import pkg from '../../package.json';


const app = express();

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/css/index.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/vender.js"></script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
}

//dev模式
if (dev) {
  let webpack = require('webpack');
  let webpackDevMiddleware = require('webpack-dev-middleware');
  let webpackHotMiddleware = require('webpack-hot-middleware');
  let webpackConfig = require('../../webpack-dev.config.js');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use('/', express.static(__dirname + '/../../dist'));
}

app.get('/*', function(req, res) {

  const location = createLocation(req.url);
  getUser(user => {
    if (!user) {
      // statement
      return res.status(401).end('Not Authorised');
    }
    match({
      routes,
      location
    }, (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err);
        return res.status(500).end('Internal server error');
      }

      if (!renderProps) {
        return res.status(404).end('Not found');
      }

      const store = configureStore({
        user: user,
        version: pkg.version
      });

      const InitialView = (
        <div>
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
        </div>
      );

      fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
        .then(html => {
          const componentHTML = renderToString(InitialView);
          const initialState = store.getState();
          res.status(200).end(renderFullPage(componentHTML, initialState))
        })
        .catch(err => {
          console.log(err)
          res.end(renderFullPage("", {}))
        });
    });


    //-------------------------------------------//华丽丽的分割线
  });
});

const server = app.listen(3002, () => {
  console.log('app listening at:3002'.info);
  open('http://localhost:3002')
});

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  dev: 'blue',
  error: 'red'
});
