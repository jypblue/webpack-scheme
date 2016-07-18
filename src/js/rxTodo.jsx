/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 16:54:34
 * @version $Id$
 */

import '../css/components/rxtodo.css';
//import 'todomvc-app-css/index.css';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/rxTodoConfigureStore';
import Root from './containers/rxTodoRoot';

const store = configureStore();
render (
  <Root store={store}/>,
  document.getElementById('root')
);
