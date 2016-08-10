/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 14:01:56
 * @version $Id$
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/RxCounter/rxCounter';
import * as CounterActions from '../actions/rxCounterActions';

class CounterApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Counter counter={counter} {...bindActionCreators(CounterActions,dispatch)} />
    );
  }
}

function select(state) {
  return {
    counter: state.counter
  };
}

export default connect(select)(CounterApp);
