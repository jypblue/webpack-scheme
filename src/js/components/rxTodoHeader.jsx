/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-13 18:49:54
 * @version $Id$
 */

import React, { PropTypes, Component } from 'react';
import TodoTextInput from './rxTodoTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text) {
    if (text.length !== 0) {
      // statement
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoTextInput newTodo={true} onSave={::this.handleSave} placeholder='What needs to be done?' />
      </header>
    )
  }

}
