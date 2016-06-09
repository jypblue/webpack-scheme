/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 17:26:46
 * @version $Id$
 */

'use strict';
import React, {Component, PropTypes } from 'react';
import TodoPureComponent from '../components/TodoPureComponent.jsx';
import Todo from '../components/Todo.jsx';


export default class TodoList extends TodoPureComponent {
  static propTypes = {
    activeFilter:PropTypes.string.isRequired,
    todoList:PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filterTodoList() {
    switch (this.props.activeFilter) {
      case 'completed':
        return this.props.todoList.filter(todo => todo.get('isCompleted'));

      case 'active':
        return this.props.todoList.filterNot(todo => todo.get('isRequired'));

      default:
        return this.props.todoList;
    }
  }

  render() {
    const todoList = this.filterTodoList();
    return (
      <div>
        {!!todoList.size && (
          <ul className="list-group">
            {
              todoList.map(todo=> {
                return (
                  <Todo key={todo.get('id')} dispatch={this.props.dispatch} todo={todo} />
                )
              })
            }
          </ul>
        )}
      </div>
    )
  }


}

















