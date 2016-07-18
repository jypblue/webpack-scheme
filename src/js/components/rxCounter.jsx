/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 14:06:24
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement , counter } = this.props;

    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}> + </button>
        {' '}
        <button onClick={decrement}> - </button>
        {' '}
        <button onClick={incrementIfOdd}> IncrementIfOdd if odd </button>
      </p>
    )
  }
}
