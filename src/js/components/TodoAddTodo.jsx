/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 16:19:39
 * @version $Id$
 */

'use strict';

import React, { Component, PropTypes } from 'react';

export default class TodoAddTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" ref='input' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

TodoAddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
