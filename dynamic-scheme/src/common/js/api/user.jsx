/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-21 17:05:26
 * @version $Id$
 */

export function getUser(callback) {
  setTimeout( ()=> {
    callback({
      name: 'zx.wang',
      dept: 'skysea',
      lastLogin: new Date(),
      email: 'zx.wang@ctrip.com',
      id:'helloworld'
    })
  }, 500)
}
