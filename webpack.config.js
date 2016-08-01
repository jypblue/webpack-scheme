/**
 *
 * @authors jachin (zx.wang@ctrip.com)
 * @date    2016-05-24 17:10:59
 * @describe
 * @version $Id$
 */

'use strict';

let conf = require('./webpack-build.config.js');

module.exports = conf({
  dev: false
});
