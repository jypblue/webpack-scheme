/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 11:09:44
 * @version $Id$
 */
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import { bindActionCreators } from 'redux';
import Tabs from '../components/RxTabs/rxTabs';
import * as action from '../actions/rxTabs';

function mapStateToProps(state) {
  console.log(state);
  return {
    index: state.currentIndex.index
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs);
