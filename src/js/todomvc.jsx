/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-09 22:54:44
 * @version $Id$
 */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import '../scss/todomvc.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)
