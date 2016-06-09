/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-08 17:22:54
 * @version $Id$
 */

import React, { PropTypes } from 'react';
import TodoPureComponent from '../components/TodoPureComponent';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import TodoAddTodo from '../components/TodoAddTodo';
import TodoFooter from '../components/TodoFooter';

class TodoApp extends TodoPureComponent {

  static propTypes = {
    activeFilter:PropTypes.string.isRequired,
    todoList:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  render() {
    const { dispatch, activeFilter, todoList } = this.props;

    return (
      <div className="app">
        <div className="todos">
          <h1>ToDo App</h1>
          <TodoAddTodo dispatch={dispatch}/>
          <TodoList dispatch={dispatch} activeFilter={activeFilter} todoList={todoList}/>
          <TodoFooter dispatch={dispatch} activeFilter={activeFilter}/>
        </div>
        <small className="signature">jachin</small>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state.todos});

export default connect(mapStateToProps)(TodoApp);



