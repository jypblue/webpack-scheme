/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-14 18:51:15
 * @version $Id$
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/rxRedditConfigureStore';
import AsyncApp from './rxAsyncApp';

const store = configureStore();

export default class RedditRoot extends Component {
  render() {
    return (
      <Provider store={store}>
      <AsyncApp />
      </Provider>
    )
  }
}
