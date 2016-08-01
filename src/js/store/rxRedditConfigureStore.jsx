/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-17 00:08:35
 * @version $Id$
 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootRedditReducer from '../reducers/rxReddit';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootRedditReducer,initialState);
}
