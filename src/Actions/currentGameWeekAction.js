import { UPDATE_CURRENT_GAME_WEEK, UPDATE_CURRENT_GAME_WEEK_FAIL } from './types';
import { endpoints } from '../utilities/utils';

export const currentGameWeekAction = () => {
  return async (dispatch) => {
    try {
      const requestOptions = {
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

      let response = await fetch(endpoints.premierLeagueCurrentGameWeek, requestOptions);
      let data = await response.json();
      dispatch({
        type: UPDATE_CURRENT_GAME_WEEK,
        payload: data,
      });
    } catch (error) {
      console.log('in the catch block for the fetch api -> premier league current game week api call');
      dispatch({
        type: UPDATE_CURRENT_GAME_WEEK_FAIL,
      });
    }
  };
};
