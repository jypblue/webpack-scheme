/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-10 14:27:56
 * @version $Id$
 */

import { createStore } from 'redux';
import rootReducer from '../reducers/todomvc';

export default function configureStore (preloadedState) {
  const store = createStore(rootReducer,preloadedState);

  if (module.hot) {
    // statement
    module.hot.accept('../reducers/todomvc', ()=> {
      const nextReducer = require('../reducers/todomvc').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
