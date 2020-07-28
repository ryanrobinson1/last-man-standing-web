import { UPDATE_CURRENT_GAME_WEEK, UPDATE_CURRENT_GAME_WEEK_FAIL } from '../Actions/types';

const initialGameWeekState = {
  gameWeek: 1,
  isLoading: true,
};

export function currentGameWeekReducer(state = initialGameWeekState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CURRENT_GAME_WEEK:
      return { ...state, gameWeek: payload.currentRound, isLoading: false };
    case UPDATE_CURRENT_GAME_WEEK_FAIL:
      console.log('failed to update current game week... show an alert or retry');
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
