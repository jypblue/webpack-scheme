/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 13:57:47
 * @version $Id$
 */
import React, {
  Component
} from 'react';
import {
  Provider
} from 'react-redux';
import CounterApp from './rxCounterApp';


export default class CounterRoot extends Component {
  render() {
    const {
      store
    } = this.props;
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    )
  }
}
