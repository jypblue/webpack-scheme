/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 23:35:57
 * @version $Id$
 */

import React from 'react';
import { render } from 'react-dom';
require('resetCss');
require('commonCss');


import Slider from './components/Slider';


require.ensure([], function(require) {
    let Slider = require ('./components/Slider');

});


const imagedata = [
  {
    src:require('../img/d1.jpg'),
    alt:'images-1'
  },
  {
    src:require('../img/d2.jpg'),
    alt:'images-2'
  },
  {
    src:require('../img/d3.jpg'),
    alt:'images-3'
  }
];

render(
  <Slider effect="left" items={ imagedata } speed={0.8} delay={1.2} pause={true} autoplay={true} dots={true} arrows={true} />,
  document.querySelector('.container')
)
























