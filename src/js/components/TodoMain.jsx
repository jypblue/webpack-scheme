/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-12 14:55:37
 * @version $Id$
 */

'use strict';
import React, {Component} from 'react';
import {render} from 'react-dom';

import TodoItem from './TodoItem.jsx';

export default class TodoMain extends Component {

  //遍历显示任务，转发props
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo,index)=>{
            return <TodoItem key={index} {...todo} index={index} {...this.props}/>
        })}
      </ul>
    );
  }
}
