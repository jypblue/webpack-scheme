/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:26:00
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-03 23:51:18
 */

'use strict';
import {
  createStore
} from 'redux'
import rxInput from '../reducers/rxInput'

export default function configureStore(initialState) {
  const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rxInput, initialState);
  return store;
}
