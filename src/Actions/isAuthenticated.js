import { AUTHENTICATED_SUCCESS, AUTHENTICATED_FAILURE, REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { endpoints } from '../utilities/utils';
import cookie from 'react-cookies';

export const isAuthenticated = () => {
  return (dispatch) => {
    try {
      //api call to our backend to check if we are authenticated
      fetch(endpoints.account, {
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: cookie.load('access_token'),
        },
      })
        .then((response) => response.json())
        .then(function (data) {
          console.log('Request succeeded with JSON response', data);
          if (data.isAuthenticated) {
            console.log('we are authenticated, proceed to account page');
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('refreshToken', data.refreshToken);
            dispatch({
              type: AUTHENTICATED_SUCCESS,
              payload: data,
            });
          } else {
            console.log('we are not authenticated, redirect to login');
            // throw new Error('Access Denied');
            dispatch({
              type: AUTHENTICATED_FAILURE,
              payload: data.error,
            });
          }
        })
        .catch(function (error) {
          console.log('Request failed', error);
        });
    } catch (error) {
      console.log('in the catch block for the fetch api');
      dispatch({
        type: AUTHENTICATED_FAILURE,
        payload: error,
      });
    }
  };
};

// export function auth(msg) {
//   return {
//     type: AUTH_SUCCESS,
//     payload: { test: msg },
//   };
// }
