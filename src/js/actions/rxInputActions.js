/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:16:05
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-04 00:10:05
 */

'use strict';
import {
  CHANGE
} from '../constants/rxInputActionTypes';
export function change(value) {
  return {
    type: CHANGE,
    value: value
  }
}
