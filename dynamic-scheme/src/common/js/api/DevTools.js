/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-29 17:32:04
 * @version $Id$
 */

import React from 'react';
import {
  createDevTools
} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor />
  </DockMonitor>
);
