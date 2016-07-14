/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-14 00:01:30
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder:PropTypes.string,
    editing:PropTypes.bool,
    newTodo:PropTypes.bool
  };

  constructor(props,context) {
    super(props, context);

    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      // statement
      this.props.onSave(text);
      if (this.props.newTodo) {
         // statement
         this.setState({ text: ''});
       }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      // statement
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input type="text" className={classnames({
        edit: this.props.editing,
        'new-todo': this.props.newTodo
      })}
      placeholder={this.props.placeholder}
      autoFocus='true'
      value={this.state.text}
      onBlur={::this.handleBlur}
      onChange={::this.handleChange}
      onKeyDown={::this.handleSubmit}
      />
    );
  }

}
















