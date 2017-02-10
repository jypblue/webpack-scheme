/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-14 18:52:52
 * @version $Id$
 */
import fetch from 'isomorphic-fetch';
import * as types from '../constants/rxRedditActionTypes';


export function selectSubreddit(subreddit) {
  return {
    type: types.SELECT_SUBREDDIT ,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: types.INVALIDATE_SUBREDDIT ,
    subreddit
  }
}

function requestPosts(subreddit) {
  return {
    type: types.REQUEST_POSTS,
    subreddit
  }
}

function receivePosts(subreddit, json) {
  return {
    type: types.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        console.log(response)
        return response.json();
    })
    .then(function(json) {
      console.log(json);
      return dispatch(receivePosts(subreddit, json))
    })
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts) {
    // statement
    return true;
  } else if(posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate
  }
}


export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // statement
      return dispatch(fetchPosts(subreddit));
    }
  }
}






