/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:24:27
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-04 01:05:48
 */

'use strict';
import {
  combineReducers
} from 'redux';
import {
  CHANGE
} from '../constants/rxInputActionTypes';

function rxinput(state, action) {
  switch (action.type) {
    case CHANGE:
      return {
        value: action.value
      };
    default:
      return {
        value: "default"
      };
  }
}

export default rxinput;
