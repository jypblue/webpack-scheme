/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 17:08:34
 * @version $Id$
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './rxTodoApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
      <TodoApp />
      </Provider>
    )
  }
}
