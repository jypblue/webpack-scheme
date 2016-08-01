/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-21 17:20:08
 * @version $Id$
 */

import {createStore, applyMiddleware, compose } from 'redux';
import {
  routerMiddleware
} from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from '../api/promiseMiddleware';
import rootReducer from '../reducers';
import DevTools from '../api/DevTools';

export default function configureStore(history,initialState) {

  const middlewareBuilder = () => {
  let middleware = {};
  let universalMiddleware = [thunk, promiseMiddleware];
  let allComposeElements = [];

  if (process.browser) {
    // statement
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
      // statement
      middleware = applyMiddleware(...universalMiddleware);

      allComposeElements = [
        middleware,
        applyMiddleware(
        routerMiddleware(history)
      )
      ]

    } else {
      middleware = applyMiddleware(...universalMiddleware, createLogger());
      allComposeElements = [
      middleware,
      applyMiddleware(
        routerMiddleware(history)
      )
      ]
    }
  } else {
    middleware = applyMiddleware(...universalMiddleware);
    allComposeElements = [
    middleware
    ]
  }
  return allComposeElements;
}

const finalCreateStore = compose(...middlewareBuilder(),DevTools.instrument())(createStore);

const store =finalCreateStore(rootReducer,initialState);

  if (module.hot) {
    // statement
    module.hot.accept('../reducers',() => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}















