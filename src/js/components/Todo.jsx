/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 16:57:50
 * @version $Id$
 */

'use strict';

import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <li onClick={this.props.onClick} style={{
        textDecoration:this.props.completed?'line-throuth':'none',
        cursor:this.props.completed?'default':'pointer'
      }}>
        {this.props.text}
      </li>
    )
  }
}

Todo.PropTypes = {
  onClick:PropTypes.func.isRequired,
  text:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired
}

