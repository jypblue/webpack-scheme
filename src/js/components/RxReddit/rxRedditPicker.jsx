/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-17 11:06:44
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import { Select } from 'antd';
const Option = Select.Option;

export default class Picker extends Component {

  render() {
    const { value, onChange, options } = this.props;
    return (
      <span>
        <h1>{value}</h1>
        <Select onChange={this.handleChange.bind(this)} defaultValue={value}  style={{width:120,marginTop:8,marginBottom:8}}>
        { options.map(option =>
          <Option value={option} key={option}>
          {option}
          </Option>)}
        </Select>
      </span>
    )
  }

  handleChange(value) {
      console.log(`selected ${value}`);
      this.props.onChange(value);
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
