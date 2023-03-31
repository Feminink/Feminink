// IMPORT COMBINE REDUCERS
import { combineReducers } from "redux";
// IMPORT REDUCERS
import AuthReducer from "./auth/reducer";

const rootReducer = combineReducers({
  AuthReducer,
});

export default rootReducer;
