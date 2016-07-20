/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 15:29:28
 * @version $Id$
 */
import { combineReducers } from 'redux';
import { INCREMENT_COUNTER,DECREMENT_COUNTER } from '../constants/rxCounterActionTypes';


function counter (state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // statements_1
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      // statements_def
      return state;
  }
}

const rootCounterReducer = combineReducers({
  counter
});

export default rootCounterReducer;
