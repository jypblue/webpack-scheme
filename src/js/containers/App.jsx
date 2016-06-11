/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-10 14:28:47
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todomvc';

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos:state.todos
  }
}

function mapDispatchToProps(dispath) {
  return {
    actions:bindActionCreators(TodoActions,dispath)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)



















