/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 15:53:45
 * @version $Id$
 */

'use strict';

import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions/TodoActions.js';
import TodoAddTodo from '../components/TodoAddTodo.jsx';
import TodoList from '../components/TodoList.jsx';
import TodoFooter from '../components/TodoFooter.jsx';

class TodoApp extends Component {
  render() {
    const {
      dispatch,
      visibleTodos,
      visibilityFilter
    } = this.props;

    return (
      <div>
      <TodoAddTodo onAddClick={ text =>
        dispatch(addTodo(text))
       } />
      <TodoList todos={visibleTodos} onTodoClick={index=>
        dispatch(completeTodo(index))
      }/>
      <TodoFooter filter={visibilityFilter} onFilterChange={ nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
    </div>
    )
  }
}

TodoApp.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(TodoApp);
