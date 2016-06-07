/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 16:34:42
 * @version $Id$
 */

'use strict';

import React, { Component, PropTypes } from 'react';

export default class TodoFooter extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      // statement
      return name;
    }

    return (
      <a href="#" onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
      {name}
      </a>
      )
  }

  render() {
    return (
      <p>
        Show:
        {'  '}
        {this.renderFilter('SHOW_ALL','ALL')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
      )
  }
}


TodoFooter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter:PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
    ]).isRequired
}
















