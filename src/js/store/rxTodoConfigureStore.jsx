/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 17:08:09
 * @version $Id$
 */

import { createStore } from 'redux';
import rootReducer from '../reducers/rxTodos';

export default function configureStore(initialState) {
  const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rxTodos', () => {
      const nextReducer = require('../reducers/rxTodos');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
