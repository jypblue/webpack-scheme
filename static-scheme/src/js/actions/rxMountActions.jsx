/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-20 13:53:09
 * @version $Id$
 */

import { INCREASE, DECREASE } from '../constants/rxMountActionTypes';

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}

