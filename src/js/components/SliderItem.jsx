/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 23:42:04
 * @version $Id$
 */

import React, { Component } from 'react';

export default class SliderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { count, item } = this.props;
    let width = 600 + "px";
    return (
      <li className="slider-item" style={{width:width}}>
        <img src={item.src} alt={item.alt}/>
      </li>
      );
  }
}
