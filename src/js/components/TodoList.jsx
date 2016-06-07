/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 17:26:46
 * @version $Id$
 */

'use strict';
import React, {Component, PropTypes } from 'react';
import Todo from '../components/Todo.jsx';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map( (todo, index) => <Todo {...todo} key={index } onClick={()=>this.props.onTodoClick(index)} />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
  }).isRequired).isRequired
}
