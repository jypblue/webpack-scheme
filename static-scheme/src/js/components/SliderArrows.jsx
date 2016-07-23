/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 23:42:50
 * @version $Id$
 */
import React, { Component } from 'react';

export default class SliderArrows extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span className="slider-arrow slider-arrow-left iconfont icon-jiantouxiangzuo" onClick={this.handleArrowClick.bind(this,-1)}>
        </span>
        <span className="slider-arrow slider-arrow-right iconfont icon-jiantouxiangyou" onClick={this.handleArrowClick.bind(this,1)}>
        </span>
      </div>
    );
  }
}
