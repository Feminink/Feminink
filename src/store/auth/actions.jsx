// IMPORT AXIOS
import axios from "axios";

// IMPORT ACTION TYPES
import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL,
  DO_LOGOUT,
  DO_LOGOUT_OK,
  DO_LOGOUT_FAIL,
} from "./actionTypes";

export function actionDoLogin(loginData) {
  return {
    type: DO_LOGIN,
    payload: loginData
  };
}

export function actionDoLoginOk(token) {
  return {
    type: DO_LOGIN_OK,
    payload: token
  };
}

export function actionDoLoginFail(error) {
  return {
    type: DO_LOGIN_FAIL,
    payload: error
  };
}

// DOLOGIN FUNCTION
export function doLogin(userData) {
  return async (dispatch) => {
    try {
      dispatch(actionDoLogin(userData));
      const response = await axios.post(
        "http://localhost:3000/users",
        userData
      );
      dispatch(actionDoLoginOk(response.data));
    } catch (error) {
      dispatch(actionDoLoginFail(error));
    }
  };
}

export function actionDoLogout() {
  return {
    type: DO_LOGOUT,
  };
}

export function actionDoLogoutOk() {
  return {
    type: DO_LOGOUT_OK,
  };
}

export function actionDoLogoutFail(error) {
  return {
    type: DO_LOGOUT_FAIL,
    payload: error,
  };
}

// DOLOGOUT FUNCTION
export function doLogout() {
  return async (dispatch) => {
    try {
      dispatch(actionDoLogout());
      localStorage.removeItem("token");
      dispatch(actionDoLogoutOk());
    } catch (error) {
      dispatch(actionDoLogoutFail(error));
    }
  };
}