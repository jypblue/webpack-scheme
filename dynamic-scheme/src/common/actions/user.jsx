import { GET_USER } from '../constants/user';

export function getUser(value) {
  return {
    type: GET_USER,
    payload: value
  };
}
