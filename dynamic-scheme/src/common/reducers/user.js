import {
  GET_USER
} from '../constants/user';

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return state;
    default:
      return state;
  }
}
