/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-07 16:34:42
 * @version $Id$
 */

'use strict';

import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import { deleteAllTodos, changeFilter} from '../actions/TodoActions.js';
import TodoPureComponent from '../components/TodoPureComponent';

export default class TodoFooter extends TodoPureComponent {
  static propTypes = {
    activeFilter: PropTypes.string.isRequired,
    dispatch:PropTypes.func.isRequired
  }

  filter = ['all','completed', 'active']

  render() {
    const { dispatch } = this.props;

    return (
      <div>
        <div className="btn-group">
          { this.filters.map(filter => {
            const className = cn('btn btn-default capitalize', { active: this.props.activeFilter === filter});
            return (
              <button key={filter} className={className} onClick={()=>dispatch(changeFilter(filter))}>
                {filter}
              </button>
            )
          })}
        </div>
        <div className="pull-right">
          <button className="btn btn-danger" onClick={()=>dispatch(deleteAllTodos())}>Delete All</button>
        </div>
      </div>
    );
  }
}

















