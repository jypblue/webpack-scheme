/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-13 10:36:18
 * @version $Id$
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/rxTodoHeader';
import MainSection from '../components/rxTodoMainSection';
import * as TodoActions from '../actions/rxTodoActions';

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions}/>
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions,dispatch)
  };
}

export default connect(mapState,mapDispatch)(TodoApp);
