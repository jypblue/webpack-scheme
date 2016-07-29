import {
  SET_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload, 10;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
