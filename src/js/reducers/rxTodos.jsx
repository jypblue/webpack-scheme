/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 17:11:17
 * @version $Id$
 */

//todo redux
import { combineReducers } from 'redux';
import {ADD_TODO, DELETE_DODO,EDIT_TODO,MARK_TODO,MARK_ALL,CLEAR_MARKED} from '../constants/rxTodoActionTypes';

const initialState = [{
  text: 'Use Redux',
  marked: false,
  id:0
}];

//redux处理action触发的逻辑
function todos(state = initialState, action) {
  switch (action.type) {
    case  ADD_TODO:
      // statements_1
      return [{
        id: (state.length === 0 ) ? 0 : state[0].id + 1,
        marked:false,
        text: action.text
      }, ...state];

    case DELETE_DODO:
      return state.filter( todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo=> todo.id === action.id ? { ...todo, text:action.text } : todo );

    case MARK_TODO:
      return state.map(todo =>
        todo.id === action.id ?
        { ...todo, marked: !todo.marked } : todo
        );

    case MARK_ALL:
      const areAllMarked = state.every(todo => todo.marked);
      return state.map( todo=>({
        ...todo,
        marked: !areAllMarked
      }));

    case CLEAR_MARKED:
      return state.filter(todo => todo.marked === false);

    default:
      // statements_def
      return state;
  }
}

const rootTodosReducer = combineReducers({
  todos
});

export default rootTodosReducer;
