/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-22 10:30:40
 * @version $Id$
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import * as UserActions from '../actions/user';
import * as LayoutActions from '../actions/layout';
import Home from '../components/Home';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { Icon } from 'antd';

class App extends Component {
  constructor(props,context) {
    super(props,context);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this);
    this.eventUndo = this.eventUndo.bind(this);
    this.eventRedo = this.eventRedo.bind(this);
  }

  eventToggleSidebar(e){
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  eventUndo(e) {
    e.preventDefault();
    this.props.undo();
  }

  eventRedo(e) {
    e.preventDefault();
    this.props.redo();
  }

  render(){
    const {user, layout, version, counter, todos } = this.props;
    const { sidebarOpen } = layout;
    const layoutClass = classNames('wrapper',{ open : sidebarOpen});

    return (
    <div className={layoutClass}>
      <Sidebar layout={layout} user={user} version = {version}/>
      <div className="wrap">
        <Header todos={todos} counter={counter}/>
        <div className="container content">
          {!this.props.children && <Home />}
          {this.props.children}
        </div>
      </div>
      <label className="sidebar-toggle" onClick={this.eventToggleSidebar}></label>
      <label className="undo-button" onClick={this.eventUndo}><span><Icon type="menu-fold" /></span></label>
      <label className="redo-button" onClick={this.eventRedo}><span><Icon type="menu-unfold" /></span></label>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.present,
    todos: state.todos.present,
    version: state.version,
    user: state.user,
    layout: state.layout.present
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);










