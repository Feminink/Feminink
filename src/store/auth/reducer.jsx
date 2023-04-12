// IMPORT ACTION TYPES
import {
  DO_LOGIN,DO_LOGIN_OK,DO_LOGIN_FAIL,
  DO_LOGOUT,DO_LOGOUT_OK,
  GET_SINGLE_USER, GET_SINGLE_USER_OK, GET_SINGLE_USER_FAIL
} from "./actionTypes";


function saveUser(){
  try {
    return JSON.parse(localStorage.getItem("_user"))
  } catch (error) {
    return {}
  }
}

const initialState = {
   user: saveUser(),
   loadingLogin: false,
   loadingUser: false,
   error: {
    message: "",
  },
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
      case DO_LOGIN:
      state = { ...state, loadingLogin: true };
      break;
      case DO_LOGIN_OK:
      state = { ...state, loadingLogin: false, user: action.payload.user };
      break;
      case DO_LOGIN_FAIL:
      state = {
      ...state,loadingLogin: false,user: {}, error: { message: action.payload },};
      break;

      case DO_LOGOUT:
      state = { ...state };
      break;
      case DO_LOGOUT_OK:
      state = { ...state, user: {} };
      break

      case GET_SINGLE_USER:
      state = {...state, loadingUser:true}
      break
      case GET_SINGLE_USER_OK: 
      state = {...state, loadingUser: false, user: action.payload.user}
      break
      case GET_SINGLE_USER_FAIL:
      state = {...state, loadingUser: false, user: {}, error: {message: action.payload}}
      break
      
    default:
      break;
  }
  return state;
}
