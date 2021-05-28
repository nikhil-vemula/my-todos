import { createStore, combineReducers, applyMiddleware } from "redux";
import { todosData, uiData, userData } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  todosData,
  uiData,
  userData
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
