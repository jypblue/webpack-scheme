/*
 * @Author: jypblue
 * @Date:   2016-08-03 23:36:14
 * @Last Modified by:   jypblue
 * @Last Modified time: 2016-08-03 23:53:41
 */

'use strict';
import React, {
  Component,
  PropTypes
} from 'react';
import { Input } from 'antd';

export default class InputApp extends Component {
  static propTypes = {
    change: PropTypes.func.isRequired
  };

  render() {
    const { propsValue } = this.props;
    return (
      <div>
        <Input value={propsValue} onChange={this.changeHandle.bind(this)} style={{width:200+'px',margin:8+'px'}}/>
         {propsValue}
      </div>
    );
  }
  changeHandle(e) {
    const value = e.target.value.trim();
    this.props.change(value);
  }
}
