/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-20 13:39:57
 * @version $Id$
 */

import React, { Component } from 'react';
import {Link, browserHistory } from 'react-router';

export default function App({ children }) {

  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}> Go to /foo</button>
      </div>
      <div style={{marginTop:'30px'}}>{children}</div>
    </div>
  )
}

