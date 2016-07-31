import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux';

import undoable from 'redux-undo';

import user from './user';
import counter from './counter';
import layout from './layout';
import todos from './todos';
import version from './version';

const rootReducer = combineReducers({
  user: user,
  version: version,
  counter: undoable(counter),
  layout: undoable(layout),
  todos: undoable(todos),
  routing: routerReducer
});

export default rootReducer;
