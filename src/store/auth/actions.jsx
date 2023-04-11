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
    payload: loginData,
  };
}
export function actionDoLoginOk(userDetails) {
  return {
    type: DO_LOGIN_OK,
    payload: userDetails,
  };
}
export function actionDoLoginFail(error) {
  return {
    type: DO_LOGIN_FAIL,
    payload: error,
  };
}
export function doLogin(userData) {
  return async (dispatch) => {
    dispatch(actionDoLogin(userData));
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        userData
      );
      console.log(userData, "userDat")
      dispatch(actionDoLoginOk(response.data));
      console.log(response.data, "response.data")
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
export function doLogout() {
  return async (dispatch) => {
    try {
      dispatch(actionDoLogout());
      dispatch(actionDoLoginOk());
    } catch (error) {
      dispatch(actionDoLoginFail(error));
    }
  };
}
