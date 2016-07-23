/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 10:42:14
 * @version $Id$
 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/rxCounterConfigureStore';
import CounterRoot from './containers/rxCounterRoot';

const store = configureStore();

render(
    <CounterRoot store={ store }/>,
  document.getElementById('root')
);


