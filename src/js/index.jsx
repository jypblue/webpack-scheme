/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 18:30:33
 * @version $Id$
 */

import React from 'react';
import {render} from 'react-dom';
import 'resetCss';
import 'commonCss';
import '../fonts/iconfont.css';
import '../css/components/index.css';

render(
  <div className="flex header">
    <i className="iconfont icon-jiantouxiangzuo"></i>
    hello world!
    <i className="iconfont icon-jiantouxiangyou"></i>
  </div>,
  document.querySelector('.container')
);
