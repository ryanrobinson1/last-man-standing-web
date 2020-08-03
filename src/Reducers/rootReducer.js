import alertReducer from './alertReducer';
import { isAuthReducer } from './authReducer';
import { currentGameWeekReducer } from './currentGameWeekReducer';
import { leagueTableReducer } from './leagueTableReducer';

import { combineReducers } from 'redux';

export default combineReducers({
  auth: isAuthReducer,
  alert: alertReducer,
  currentGameWeek: currentGameWeekReducer,
  leagueTable: leagueTableReducer,
});
