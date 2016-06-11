/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-11 15:23:09
 * @version $Id$
 */

import React from  'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App.js';
import todoApp from './reducers/Reducers.js';

let store=createStore(todoApp);

let rootElement = document.querySelector('.container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
