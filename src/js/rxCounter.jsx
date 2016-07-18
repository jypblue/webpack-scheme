/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 10:42:14
 * @version $Id$
 */

import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/rxCounterConfigureStore';
import Root from './containers/rxCounterRoot';

const store = configureStore();

render(
    <Root store={ store }/>,
  document.getElementById('root')
);


