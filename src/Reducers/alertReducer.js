import { SET_ALERT, REMOVE_ALERT } from "../Actions/types";

export default function loginReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return [...state]; //need to use filter
    default:
      // console.log("default return state");
      return state;
  }
}
