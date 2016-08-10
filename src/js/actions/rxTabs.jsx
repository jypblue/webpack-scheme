/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-08-09 10:57:19
 * @version $Id$
 */

import { ACTIVEINDEX} from '../constants/rxTabs';

export function active(index) {
  return {
    type: ACTIVEINDEX,
    index:index
  };
}
