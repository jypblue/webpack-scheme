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
  List,
  Map
} from 'immutable';
import * as types from '../containers/TodoApp.js';

function todoList(state = List(), action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.push(Map({
        id: action.id,
        text: action.text,
        isCompleted: false,
      }));

    case types.COMPLETE_TODO:
      return state.map(todo => {
        if (todo.get('id') === action.id) {
          return todo.update('isCompleted', v => !v);
        }
        return todo;
      });

    case types.DELETE_TODO:
      return state.filter(todo => todo.get('id') !== action.id);

    case types.DELETE_ALL_TODOS:
      return state.clear();
    default:
      return state;
  }
}

function activeFilter(state = 'all', action) {
  switch (action.type) {
    case types.CHANGE_FILTER:
      console.log('%cFilter changed:' + action.filter.toUpperCase(), 'color:red;font-weight:bold;')
      return action.filter;
    default:
      return state;
  }
}



const todoApp = combineReducers({
  activeFilter,
  todoList
});

export default todoApp;
