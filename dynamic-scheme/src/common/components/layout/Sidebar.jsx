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
		    <p>This is an example of a isomorphic website built with Redux and React</p>
		    <p>Logged in as <b className="user-name">{user.name}</b></p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/home" className="sidebar-nav-item" activeClassName="active">Home <span className="nav-note">[static]</span></Link>
		    <Link to="/reddit" className="sidebar-nav-item" activeClassName="active">Reddit <span className="nav-note">[api]</span></Link>
		    <Link to="/todo" className="sidebar-nav-item" activeClassName="active">Todo <span className="nav-note">[stateful]</span></Link>
		    <Link to="/counter" className="sidebar-nav-item" activeClassName="active">Counter <span className="nav-note">[stateful]</span></Link>
		    <Link to="/about" className="sidebar-nav-item" activeClassName="active">About <span className="nav-note">[static]</span></Link>
		    <span className="sidebar-nav-item"><span className="nav-note version">{`Currently version ${version}`}</span></span>
		  </nav>
		</div>
    );
  }
}

export default Sidebar;
