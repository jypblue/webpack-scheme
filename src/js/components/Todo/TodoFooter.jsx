/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-12 14:58:59
 * @version $Id$
 */

'use strict';
import React, {Component} from 'react';
export default class TodoFooter extends Component {

  //全选与全不选状态
  handleAllState(e) {
    this.props.changeTodoState(null,e.target.checked, true);
  }

  //绑定点击事件，清除已完成
  handleClick() {
    this.props.clearDone();
  }

  render() {
    return (
      <div className="clearfix todo-footer">
        <input type="checkbox" className="fl" checked={this.props.isAllChecked} onChange={this.handleAllState.bind(this)}/>
        <span className="fl">
          {this.props.todoDoneCount}已完成/
          { this.props.todoCount}总数
        </span>
        <button className="fr" onClick={this.handleClick.bind(this)}>清除完成</button>
      </div>
    );
  }
}
