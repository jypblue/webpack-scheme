/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 14:06:51
 * @version $Id$
 */

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/rxCounterActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch,getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      // statement
      return;
    }
    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(()=> {
      dispatch(increment())
    }, 1000);
  };
}
