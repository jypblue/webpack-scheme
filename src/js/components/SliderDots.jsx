/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 23:42:24
 * @version $Id$
 */
import React, { Component } from 'react';

export default class SliderDots extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleDotClick(i) {
    var option = i - this.props.cur;
    this.props.turn(option);
  }

  render () {
    let dotNodes = [];
    let { count, cur } = this.props;
    for (let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span key={'dot' + i } className={"slider-dot" + (i === this.props.cur ? " slider-dot-active" : "")}  onClick={ this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}

