/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 11:28:06
 * @version $Id$
 */
'use strict';
import React, {
  Component,
  PropTypes,
  Children
} from 'react';
import Tabpane from './Tabpane';

export default class Tabs extends Component {
  static propTypes = {
    active: PropTypes.func.isRequired,
    index:PropTypes.number
  };
  render() {
    const { index } = this.props;
    return (
      <div>
        <Tabpane defaultIndex={index} active={this.props.active}>
          <div name="选项卡1">
            tab1
          </div>
          <div name="选项卡2">
            tab2
          </div>
          <div name="选项卡3">
            tab3
          </div>
        </Tabpane>
      </div>
    );
  }
}
















