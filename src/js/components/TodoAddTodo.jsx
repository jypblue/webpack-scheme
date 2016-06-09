/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 16:19:39
 * @version $Id$
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import {addTodo } from '../actions/TodoActions.js';

export default class TodoAddTodo extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  shouldComponentUpdate() {
    return false;
  }

  addTodo(e) {
    e.preventDefault();
    const input = this.refs.todo;
    const value = input.value.trim();

    if (value) {
      this.props.dispatch(addTodo(value));
      input.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.addTodo(e)}>
          <input type="text" className="form-control" placeholder="Enter ToDo" ref="todo"/>
        </form>

      </div>
    )
  }

}

