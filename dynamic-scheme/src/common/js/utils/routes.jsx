/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-28 10:50:51
 * @version $Id$
 */

import { Route,IndexRoute } from "react-router";
import React from "react";

import App from "../containers/App";

//Redux Smart
import CounterPage from "../containers/CounterPage";
import TodoPage from "../containers/TodoPage";

//Redux Dumb
import HomePage from "../components/Home";
import AboutPage from "../components/About";
import error404 from "../components/404";

export default (
  <Route name="app" path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="home" component={HomePage} />
      <Route path="todo" component={TodoPage} />
      <Route path="counter" component={CounterPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);
