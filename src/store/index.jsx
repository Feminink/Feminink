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

store.subscribe(()=>{
  const json = JSON.stringify(store.getState().AuthReducer.user)
  localStorage.setItem("_user", json)
})

export default store;
