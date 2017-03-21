/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 13:40:55
 * @version $Id$
 */

'use strict';
import React, {
  Component,
  PropTypes,
  Children
} from 'react';

export default class Tabpane extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    this.props.active(index);
  }
  checkTabIndex(index) {
    return index === this.props.defaultIndex ? 'tabs-tab active' : 'tabs-tab';
  }
  checkTabpaneIndex(index) {
    return index === this.props.defaultIndex ? 'tabs-tabpane show' : 'tabs-tabpane';
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs-nav">
          { Children.map(this.props.children , (el,i) => {
            return (
              <li onClick={this.handleClick.bind(this,i)} className={ this.checkTabIndex(i)}>
                {el.props.name}
              </li>
              );
          })}
        </ul>
      <div className="tabs-content">
        {Children.map(this.props.children, (el,i)=> {
          return (
            <div className={ this.checkTabpaneIndex(i)}>
              {el}
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}
