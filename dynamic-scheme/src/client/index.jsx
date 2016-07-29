/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-21 00:34:07
 * @version $Id$
 */
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import { Router,  browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from '../common/store/configureStore';
import routes from '../common/utils/routes';

import 'antd/dist/antd.css';
import '../css/index.css';


const initialState = window.__INITIAL_STATE__;
const store = configureStore(browserHistory,initialState);
const history = syncHistoryWithStore(browserHistory, store);

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>,
  rootElement
);

if (process.env.NODE_ENV !== 'production') {
  // const showDevTools = require('./showDevTools');
  // showDevTools(store);
  render(
  <Provider store={store}>
    <DevTools/>
  </Provider>,
  document.getElementById('devtools')
  )
}



