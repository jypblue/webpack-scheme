/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 10:27:24
 * @version $Id$
 */

import React from 'react';
import { render } from 'react-dom';
import {
  Provider
} from 'react-redux';
import configureStore from './store/rxTabs';
import Tabs from './containers/rxTabs';
import 'antd/dist/antd.css';
//import '../css/components/Tabs.css';

import '../scss/Tabs.scss';
const store = configureStore();
render (
  <Provider store={store}>
  <Tabs />
  </Provider>,
  document.getElementById('root')
);
