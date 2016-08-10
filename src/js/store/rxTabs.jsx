/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 11:07:01
 * @version $Id$
 */
import { createStore } from 'redux';
import rxTabsReducer from '../reducers/rxTabs';


export default function configureStore(initialState) {
  const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rxTabsReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rxTodos', () => {
      const nextReducer = require('../reducers/rxTodos');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}


