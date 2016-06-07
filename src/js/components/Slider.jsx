/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 23:40:39
 * @version $Id$
 */

import React, { Component } from 'react';
require('../../fonts/iconfont.css');
require('../../scss/Slider.scss');

import SliderItem from './SliderItem';
import SliderDots from './SliderDots';
import SliderArrows from './SliderArrows';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cur:0
    };
  }

  //状态设置
  //向前向后多少
  //也分effect做对应的修改
  turn(step) {
    let n = this.state.cur + step;
    if (n<0) {
      // statement
      n = n + this.props.items.length;
    }

    if (n >= this.props.items.length) {
      // statement
      n = n - this.props.items.length;
    }
    this.setState({cur:n});
  }

  //轮播设置
  //暂时无用

  //开始自动播放
  goPlay() {

    if (this.props.autoplay) {
      // statement
      this.autoPlayFlag = setInterval(()=>{
        this.turn(1);
      }, this.props.delay*1000);

    }
  }

  //暂停自动轮播
  pausePlay() {
    clearInterval(this.autoPlayFlag);
  }

  //React初次渲染后调用的函数
  ComponentDidMount() {
    this.goPlay();
  }

  //绘制虚拟dom
  render() {
    let count = this.props.items.length;
    let itemNodes = this.props.items.map((item,idx)=> {
      return <SliderItem item={item} count={count} key={'item'+ idx}/>;
    });
    let arrowsNode = <SliderArrows turn={this.turn.bind(this)}/>
    let dotsNode = <SliderDots turn={this.turn.bind(this)} count={count} cur={this.state.cur}/>;
    let effect = this.props.effect || "left";
    let width = 600 + "px";

    switch (effect) {
      case "leftLoop":
        // statements_1
        itemNodes =
        <ul style={{
          left:-100 * (this.state.cur+1) + "%",
          transitionDuration:this.props.speed + "s",
          width:(this.props.items.length+2)*100 + "%"
        }}>
        <li className="slider-item clone" style={{width:width}}>
        <img src={this.props.items[count-1].src} alt={this.props.items[count-1].alt}/>
        </li>
        { itemNodes }
        <li className="slider-item clone" style={{width:width}}>
        <img src={this.props.items[0].src} alt={this.props.items[0].alt}/>
        </li>
        </ul>
        break;
      default:
        // statements_def

        itemNodes =
        <ul className="js-slider-ul" style={{
          left:-100 * (this.state.cur) + "%",
          transitionDuration:this.props.speed + "s",
          width:(this.props.items.length)*100 + "%"
        }}>
        { itemNodes }
        </ul>
        break;
    }



    return (
      <div className="slider" onMouseOver={this.props.pause?this.pausePlay.bind(this):null} onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
        {itemNodes}
        {this.props.arrows?arrowsNode:null}
        {this.props.dots?dotsNode:null}
      </div>
    );
  }
}

Slider.defaultProps = {
  effect:'',
  speed:1,
  delay:2,
  pause:true,
  autoplay:true,
  dots:true,
  arrows:true,
  items:[]
};

Slider.autoPlayFlag = null;
















