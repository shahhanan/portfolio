import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

export default function configureStore(initialState) {
  //return createStore(rootReducer,initialState, applyMiddleware(logger, thunk));
  return createStore(rootReducer,initialState, applyMiddleware(thunk));
}
