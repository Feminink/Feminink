// IMPORT THUNK
import thunk from "redux-thunk";
// IMPORT COMPOSE WITH DEV TOOLS
import { composeWithDevTools } from "redux-devtools-extension";
// IMPORT ROOTREDUCER
import rootReducer from "./reducers";
// IMPORTS FROM REDUX
import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
