/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 11:00:25
 * @version $Id$
 */

import {combineReducers} from 'redux';
import {ACTIVEINDEX} from '../constants/rxTabs';

const initialState = {
  index:1,
};
function currentIndex(state = initialState,action) {
  switch (action.type){
    case ACTIVEINDEX:
      return {
        index:action.index
      };
    default:
      return state;
  }
}

const rxTabsReducer = combineReducers({
  currentIndex
});

export default rxTabsReducer;
