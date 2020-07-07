import alertReducer from "./alertReducer";
import { combineReducers } from "redux";

export default combineReducers({
  alert: alertReducer,
});
