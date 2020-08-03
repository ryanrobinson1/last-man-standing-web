import { LEAGUE_TABLE_SUCCESS, LEAGUE_TABLE_FAIL } from '../Actions/types';

const initialState = {
  rankings: [],
  isLoading: true,
};

export function leagueTableReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LEAGUE_TABLE_SUCCESS:
      return { ...state, rankings: payload, isLoading: false };
    case LEAGUE_TABLE_FAIL:
      console.log('failed to get league table... show an alert or retry');
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
