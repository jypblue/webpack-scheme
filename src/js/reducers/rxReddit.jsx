/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-17 00:09:53
 * @version $Id$
 */

import { combineReducers } from 'redux';
import { SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../constants/rxRedditActionTypes'

function selectedSubreddit(state = 'reactjs',action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      // statements_1
      return action.subreddit; //？啥意思
    default:
      // statements_def
      return state;
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      // statements_1
      return Object.assign({}, state, {
        didInvalidate:true
      });

    case REQUEST_POSTS:
      return Object.assign({},state, {
        isFetching: true,
        didInvalidate: false
      })

    case RECEIVE_POSTS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    })

    default:
      // statements_def
      return state;
  }
}

function postsBySubreddit( state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      // statements_1
      return Object.assign({},state, {
        [action.subreddit]: posts(state[action.subreddit],action)
      });
    default:
      // statements_def
      return state;
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer;








