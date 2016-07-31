/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-22 17:52:45
 * @version $Id$
 */
import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  constructor(props,context) {
    super(props,context);
  }

  render() {
    const { incrementCounter, decrementCounter, counter } = this.props;
    console.log(counter);
    return (
      <div className="posts">
        <h1>Counter</h1>
        <p>
          <b>Counter: {counter} times</b>
          {' '}
          <button onClick={incrementCounter}>+</button>
          {' '}
          <button onClick={decrementCounter}>-</button>
        </p>
      </div>

    );
  }
}

Counter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
