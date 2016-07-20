/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-20 13:11:41
 * @version $Id$
 */
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers/rxMount'
import { App } from './components/rxMountApp.jsx'
import { Bar } from './components/rxMountBar.jsx'
import { Foo } from './components/rxMountFoo.jsx'
import { Home } from './components/rxMountHome.jsx'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)
const history = syncHistoryWithStore(browserHistory, store)

//debugger;
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/rxMount.html" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/rxMount.html/foo" component={Foo}/>
          <Route path="/rxMount.html/bar" component={Bar}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('mount')
)














