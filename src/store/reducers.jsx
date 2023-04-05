// IMPORT COMBINE REDUCERS
import { combineReducers } from "redux";
// IMPORT REDUCERS
import AuthReducer from "./auth/reducer";
import TattooReducer from "./Tattoo/reducer";
import GalleryReducer from "./gallery/reducer";

const rootReducer = combineReducers({
  AuthReducer,
  TattooReducer,
  GalleryReducer,
});

export default rootReducer;
