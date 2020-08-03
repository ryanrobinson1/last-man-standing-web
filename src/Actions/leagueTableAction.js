import { LEAGUE_TABLE_SUCCESS, LEAGUE_TABLE_FAIL } from './types';
import { endpoints } from '../utilities/utils';

export const leagueTableAction = () => {
  return async (dispatch) => {
    try {
      const requestOptions = {
        method: 'get',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

      // setTimeout(async () => {
      //   let response = await fetch(endpoints.premierLeagueLeagueTable, requestOptions);
      //   let data = await response.json();
      //   dispatch({
      //     type: LEAGUE_TABLE_SUCCESS,
      //     payload: data,
      //   });
      // }, 5000);

      let response = await fetch(endpoints.premierLeagueLeagueTable, requestOptions);
      let data = await response.json();
      dispatch({
        type: LEAGUE_TABLE_SUCCESS,
        payload: data,
      });

      // let response = await fetch(endpoints.premierLeagueLeagueTable, requestOptions);
      // let data = await response.json();
      // dispatch({
      //   type: LEAGUE_TABLE_SUCCESS,
      //   payload: data,
      // });
    } catch (error) {
      console.log('in the catch block for the fetch api -> premier league table api call');
      dispatch({
        type: LEAGUE_TABLE_FAIL,
      });
    }
  };
};
