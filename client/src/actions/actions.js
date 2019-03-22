import axios from 'axios';

export const GET_POSTS = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getAllPosts = () => dispatch => {
  dispatch ({ type: GET_POSTS });
  axios
    .get('http://localhost:5000/api/posts')
    .then(res => {
      dispatch({ 
        type: SUCCESS, 
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.response
      })
    })
}