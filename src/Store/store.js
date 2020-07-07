import rootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  intialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
