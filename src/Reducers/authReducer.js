import { AUTHENTICATED_SUCCESS, AUTHENTICATED_FAILURE } from '../Actions/types';
import cookie from 'react-cookies';

const initialRegisterState = {
  isAuthenticated: false,
  isLoading: true,
  user: {},
};

export function isAuthReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHENTICATED_SUCCESS:
      // console.log('in auth reducer.. success type. this is the payload   ', payload);
      return { ...state, isAuthenticated: true, isLoading: false, user: payload };
    case AUTHENTICATED_FAILURE:
      cookie.remove('access_token');
      return { ...state };
    default:
      return state;
  }
}
