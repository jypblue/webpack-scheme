/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-14 18:49:01
 * @version $Id$
 */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import RedditRoot from './containers/rxRedditRoot';

render(
  <RedditRoot />,
  document.getElementById('root')
)
