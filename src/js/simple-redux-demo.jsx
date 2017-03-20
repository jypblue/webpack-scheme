/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-12 11:14:17
 * @version $Id$
 */

import React, {
  Component,
  PropTypes
} from 'react';
import ReactDOM from 'react-dom';
import {
  createStore
} from 'redux';
import {
  Provider,
  connect
} from 'react-redux';

//React Component
class Counter extends Component {
  render() {
    const {
      value,
      onIncreaseClick
    } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
};


//Action
//描述已发生事件的普通对象
const increaseAction = {
  type: 'increase'
};

//Reducer 更新state
//接受state和action,返回新的state。用于描述action如何改变state tree的
function counter(state = {
  count: 0
}, action) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      // statements_1
      return {
        count: count + 1
      };
    default:
      // statements_def
      return state;
  }
}

//Store
//用于存储state
const store = createStore(counter);

//Map redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

//Map redux actions to Component props
//点击click触发increaseAction
function mapDispathToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

//Connected Component
const App = connect(
  mapStateToProps,
  mapDispathToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
