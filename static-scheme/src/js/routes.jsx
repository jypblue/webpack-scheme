/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-19 15:09:07
 * @version $Id$
 */

import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, Link, IndexRoute } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

render((
  <Router>
    <Route path="/" component={App}>
     {/* 当 url 为/时渲染 Dashboard */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
