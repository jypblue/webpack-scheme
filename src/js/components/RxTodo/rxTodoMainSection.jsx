/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-13 18:49:36
 * @version $Id$
 */
import React, { Component, PropTypes } from 'react';
import TodoItem from './rxTodoItem';
import Footer from './rxFooter';
import { SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../../constants/rxTodoFilters';


const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: todo => !todo.marked,
  [SHOW_MARKED]: todo => todo.marked
};

export default class MainSection extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      filter: SHOW_ALL
    };
  }

  handleClearMarked() {
    const atLeastOneMarked = this.props.todos.some(todo => todo.marked );
    if (atLeastOneMarked) {
      // statement
      this.props.actions.clearMarked();
    }
  }

  handleShow(filter) {
    this.setState({filter});
  }

  render() {
    const { todos, actions } = this.props;
    const {filter} = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) => todo.marked ? count + 1 : count, 0);

    return (
      <section className='main'>
        {this.renderToggleAll(markedCount)}
        <ul className='todo-list'>
          {filteredTodos.map(todo => <TodoItem key={todo.id}  todo={todo} {...actions} />)}
        </ul>
        {this.renderFooter(markedCount)}
      </section>
    );
  }

  renderToggleAll(markedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      // statement
      return (
        <input type="checkbox" className='toggle-all'
         checked={markedCount === todos.length }
         onChange={actions.markAll} />
      );
    }
  }

  renderFooter(markedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      // statement
      return (
        <Footer markedCount={markedCount}
                unmarkedCount={unmarkedCount}
                filter={filter}
                onClearMarked={::this.handleClearMarked}
                onShow={::this.handleShow} />
      )
    }
  }

}














