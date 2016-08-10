/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 14:06:24
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import {Button,Input} from 'antd';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd:PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement , counter,incrementAsync } = this.props;
    return (
      <p>
        {' '}
        <Button type="primary" onClick={increment}> + </Button>
        <Input value={counter} style={{width:40,textAlign:'center',verticalAlign:'middle'}}/>
        <Button  onClick={decrement}> - </Button>
        {' '}
        <Button type="ghost" onClick={incrementIfOdd}> IncrementIfOdd if odd </Button>
        {''}
        <Button type="dashed" onClick={incrementAsync}>Increment async</Button>
      </p>
    )
  }
}
