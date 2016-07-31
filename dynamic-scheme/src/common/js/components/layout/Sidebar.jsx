import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
class Sidebar extends Component {
  constructor(props,context){
	super(props,context);
  }

  render() {

  	const {version,user} = this.props;

    return (

    	<div className="sidebar">
		  <div className="sidebar-item">
		    <p>a isomorphic application built with Redux and React</p>
		    <p>Logged in as <b className="user-name">{user.name}</b></p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home</Link>
		    <Link to="/todo" className="sidebar-nav-item" activeClassName="active">Todo</Link>
		    <Link to="/counter" className="sidebar-nav-item" activeClassName="active">Counter</Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About</Link>
		    <span className="sidebar-nav-item">{`Currently version ${version}`}</span>
		  </nav>
		</div>
    );
  }
}

export default Sidebar;
