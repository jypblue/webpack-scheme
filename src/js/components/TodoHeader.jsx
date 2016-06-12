/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-12 14:37:30
 * @version $Id$
 */

'use strict';
import React, { Component } from 'react';

class TodoHeader extends Component{

  //绑定回车事件，添加任务
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      let value = e.target.value;
      if (!value) {
        // statement
        return false;
      }

      let newTodoItem = {
        text:value,
        isDone:false
      };
      e.target.value = '';
      this.props.addTodo(newTodoItem);
    }
  }

  render() {
    return (
      <div className="panel-header">
        <input type="text" onKeyUp={this.handleKeyUp.bind(this)} placeholder="what's your task?"/>
      </div>
    )
  }
}

export default TodoHeader;
