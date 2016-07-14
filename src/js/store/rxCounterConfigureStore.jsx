/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 14:54:23
 * @version $Id$
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rxCounter';

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState) {
  return createStore(rootReducer,initialState,enhancer);
}
