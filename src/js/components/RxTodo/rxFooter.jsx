/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-14 11:15:23
 * @version $Id$
 */
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../../constants/rxTodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_UNMARKED]: 'Active',
  [SHOW_MARKED]: 'Completed'
};

export default class Footer extends Component {
  static propTypes = {
    markedCount: PropTypes.number.isRequired,
    unmarkedCount:PropTypes.number.isRequired,
    filter:PropTypes.string.isRequired,
    onClearMarked:PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  render() {
    return (
      <footer className='footer'>
        {this.renderTodoCount()}
        <ul className='filters'>
          { [SHOW_ALL, SHOW_UNMARKED, SHOW_MARKED].map( filter => <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
            )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }

  renderTodoCount() {
    const { unmarkedCount } = this.props;
    const itemWord = unmarkedCount === 1 ? 'item' : 'items';

    return (
      <span className='todo-count'>
      <strong>{unmarkedCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter];
    const {filter: selectedFilter, onShow } = this.props;

    return (
      <a className={classnames({ selected: filter === selectedFilter })} style={{ cursor: 'hand'}}
      onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const {markedCount, onClearMarked } = this.props;
    if (markedCount > 0 ) {
      // statement
      return (
        <button className='clear-completed' onClick={onClearMarked}>
          Clear completed
        </button>
      )
    }
  }


}








