// IMPORT ACTION TYPES
import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL,
  DO_LOGOUT,
  DO_LOGOUT_OK,
  DO_LOGOUT_FAIL,
} from "./actionTypes";

const initialState = {
  user: {},
  token: null, // agregar campo para el token
  loadingLogin: false,
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
      state = { ...state, loadingLogin: false, user: action.payload.user, token: action.payload.token };
      break;
    case DO_LOGIN_FAIL:
      state = {
        ...state,
        loadingLogin: false,
        user: {},
        token: null,
        error: { message: action.payload },
      };
      break;
    case DO_LOGOUT:
      state = { ...state };
      break;
    case DO_LOGOUT_OK:
      state = { ...state, user: {}, token: null };
      break;
    case DO_LOGOUT_FAIL:
      state = {
        ...state,
        error: { message: action.payload },
      };
      break;
    default:
      break;
  }
  return state;
}