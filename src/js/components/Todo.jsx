/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 16:57:50
 * @version $Id$
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import { deleteTodo, completeTodo } from '../actions/TodoActions.js';
import TodoPureComponent from '../components/TodoPureComponent';
import cn from 'classnames';

export default class Todo extends Component {

  static propTypes = {
    todo: PropTypes.object.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  componentWillMount() {
    console.log('%cTodo mounting- Id:' + this.props.todo.get('id'), 'color:green;');
  }

  componentWillUpdate(nextProps) {
    console.log('%cTodo updating - Id:' + nextProps.todo.get('id'), 'color:blue');
  }

  componentWillUnmount() {
    console.log('%cTodo unmounting - Id' + this.props.todo.get('id'), 'color:orange');
  }

  render() {
    const { id, text, isCompleted } = this.props.todo.toObject();
    const classnames = cn('todo', {completed:isCompleted});

    return (
      <li className="list-group-item">
        <span className={className} onClick={()=> this.props.dispatch(completeTodo(id))}>
          {text}
        </span>
        <div className="close" onClick={()=> this.props.dispatch(deleteTodo(id))}>
          &times;
        </div>
      </li>
    )
  }

}

























