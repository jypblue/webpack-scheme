/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:25:04
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-04 00:18:52
 */

'use strict';
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import { bindActionCreators } from 'redux';
import InputApp from '../components/RxInput/rxInput';
import * as action from '../actions/rxInputActions';

function mapStateToProps(state) {
  console.log(state);
  return {
    propsValue: state.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(InputApp);
