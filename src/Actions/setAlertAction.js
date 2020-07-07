import { SET_ALERT, REMOVE_ALERT } from "./types";

export function setAlert(msg) {
  return {
    type: SET_ALERT,
    payload: { id: 1, msg: msg },
  };
}
