/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:16:05
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-10 12:31:41
 */

'use strict';
import {
  CHANGE
} from '../constants/rxInputActionTypes';
export function change(value) {
  return {
    type: CHANGE,
    value: value
  };
};
