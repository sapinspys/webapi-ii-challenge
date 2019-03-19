import {
  GET_POSTS,
  SUCCESS,
  FAILURE,
} from '../actions/actions';

const initialState = {
  posts: [],
  gettingPosts: false,
  error: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        gettingPosts: true,
        error: null,
      }
    case SUCCESS:
      return {
        ...state,
        posts: action.payload,
        gettingPosts: false,
        error: null,
      }
    case FAILURE:
      return {
        ...state,
        gettingPosts: false,
        error: action.payload,
      }
    default:
      return state
  }
}