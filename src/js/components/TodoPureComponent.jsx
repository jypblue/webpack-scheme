/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-08 15:20:32
 * @version $Id$
 */

import { Component } from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';

export default class TodoPureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return !shallowEqual(this.props,nextProps) || !shallowEqual(this.state, nextState);
  }
}


