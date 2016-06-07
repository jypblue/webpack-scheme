/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 15:41:00
 * @version $Id$
 */

'use strict';

import {
  combineReducers
} from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions/TodoActions.js';
const {
  SHOW_ALL
} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}


function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      // statements_1
      return [...state, {
        text: action.text,
        complete: false
      }];
    case COMPLETE_TODO:
      return [...state.slice(0, action.index), Object.assign({}, state[action.index], {
        complete: true
      }), ...state.slice(action.index + 1)];
    default:
      // statements_def
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
