
import {SET_COUNTER,INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

export function setCounter(value) {
  return {
    type: SET_COUNTER,
    payload: value
  };
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();
    if (counter % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
