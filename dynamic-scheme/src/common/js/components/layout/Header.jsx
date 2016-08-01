import React, { Component, PropTypes } from 'react';

class Header extends Component {

  render() {
  	const {counter, todos} = this.props;
  	const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    );
    const activeCount = todos.length - completedCount;

    return (
      <div className="head">
			<div className="header">
			  <h3 className="head-title">
			   <a href="/" title="Home">Redux Application Demo </a>
          <div className="head-indicator">
            <span className="counter-indicator">{`Counter : ${counter}`}</span>
            <span className="todo-indicator">{`Todos : ${activeCount}`}</span>
          </div>
			  </h3>
			</div>
		</div>
    );
  }
}

Header.propTypes = {
  counter: PropTypes.number.isRequired,
  todos: PropTypes.array.isRequired
};

export default Header;
