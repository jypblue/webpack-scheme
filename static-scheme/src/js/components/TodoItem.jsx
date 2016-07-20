/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-12 14:43:08
 * @version $Id$
 */
'use strict';

import React, { Component } from 'react';

export default class TodoItem extends Component {

  //处理任务是否完成状态
  handleChange() {
    let isDone = !this.props.isDone;
    this.props.changeTodoState(this.props.index, isDone);
  }

  //鼠标移入-显示
  handleMouseOver(){
    //获取dom
    this.refs.deleteBtn.style.display = "inline";
  }

  //鼠标移出-隐藏
  handleMouseOut() {
    this.refs.deleteBtn.style.display = "none";
  }

  //删除当前任务
  handleDelete(){
    //传入的props
    this.props.deleteTodo(this.props.index);
  }

  //render虚拟dom
  render() {

    let doneStyle = this.props.isDone ? {textDecoration:'line-through'} : { textDecoration:'none'};

    return (
      <li onMouseOver={this.handleMouseOver.bind(this)}  onMouseOut={this.handleMouseOut.bind(this)}>
        <input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)}/>
        <span style={doneStyle}>
          { this.props.text }
        </span>
        <button type="button" ref="deleteBtn" onClick={this.handleDelete.bind(this)} className="fr" style={{'display':'none'}}>
        删除
        </button>
      </li>
    )
  }

}


















