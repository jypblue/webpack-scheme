/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 17:08:09
 * @version $Id$
 */

import { createStore } from 'redux';
import rootReducer from '../reducers/rxTodos';

export default function configureStore(initialState) {
  return createStore(rootReducer,initialState);
}
