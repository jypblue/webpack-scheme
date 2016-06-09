/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 15:32:09
 * @version $Id$
 */


import * as types from '../containers/TodoApp.js';

let idCounter = 0;

export const addTodo = text => ({
  type: types.ADD_TODO,
  text,
  id: ++idCounter
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id
});

export const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  filter
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

export const deleteAllTodos = () => {
  idCounter = 0;
  return {
    type: types.DELETE_ALL_TODOS
  };
};
