// IMPORT COMBINE REDUCERS
import { combineReducers } from "redux";

// IMPORT REDUCERS
import AuthReducer from "./auth/reducer";
import TattooReducer from './Tattoo/reducer';
import OurTeamReducer from './homepageinfo/reducer';
import InfoReducer from './info/reducer';

const rootReducer = combineReducers({
  AuthReducer,
  TattooReducer,
  OurTeamReducer,
  InfoReducer
});

export default rootReducer;
