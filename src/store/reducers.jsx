// IMPORT COMBINE REDUCERS
import { combineReducers } from "redux";
// IMPORT REDUCERS
import AuthReducer from "./auth/reducer";
import TattooReducer from './Tattoo/reducer';

const rootReducer = combineReducers({
  AuthReducer,
  TattooReducer
});

export default rootReducer;
