import alertReducer from './alertReducer';
import { isAuthReducer } from './authReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  isAuth: isAuthReducer,
  alert: alertReducer,
});
