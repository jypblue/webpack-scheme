/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-21 16:58:47
 * @version $Id$
 */


export function fetchComponentDataBeforeRender(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    return (current.need || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
      .concat(prev);
    }, []);
    const promises = needs.map(need => dispatch(need()));
    return Promise.all(promises);
}
