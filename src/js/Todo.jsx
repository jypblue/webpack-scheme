/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 15:17:54
 * @version $Id$
 */

'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoApp from './components/TodoApp.jsx';
import TodoReducer from './reducers/TodoReducers.js';

import '../scss/todo.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

let store = createStore(TodoReducer);

let rootNode = document.querySelector('.container');

render (
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  rootNode
)
