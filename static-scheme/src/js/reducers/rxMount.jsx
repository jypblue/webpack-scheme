/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-20 13:55:37
 * @version $Id$
 */

import { INCREASE, DECREASE } from '../constants/rxMountActionTypes';

const initialState = {
  number: 1
}

export function update(state = initialState, action) {

  switch (action.type) {
    case INCREASE:
      // statements_1
      return {
        number: state.number + action.amount
      };

    case DECREASE:
      return {
        number: state.number - action.amount
      }
    default:
      // statements_def
      return state;
  }
}
