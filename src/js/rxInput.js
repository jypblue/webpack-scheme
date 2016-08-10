/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:15:19
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-10 12:28:12
 */

'use strict';

import 'babel-polyfill';
import React from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';
import configureStore from './store/rxInputConfigureStore';
import InputApp from './containers/rxInput';
import 'antd/dist/antd.css';

const store = configureStore();
render(
  <Provider store={store}>
    <InputApp />
  </Provider>,
  document.getElementById('root')
);
