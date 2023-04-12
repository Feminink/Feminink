// IMPORT AXIOS
import axios from "axios";
// IMPORT ACTION TYPES
import {
  DO_LOGIN,DO_LOGIN_OK,DO_LOGIN_FAIL,
  DO_LOGOUT,DO_LOGOUT_OK,DO_LOGOUT_FAIL,
  GET_SINGLE_USER, GET_SINGLE_USER_FAIL, GET_SINGLE_USER_OK
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


// export function actionGetSingleUser(userId){
  // return{
    // type: GET_SINGLE_USER,
    // payload: userId
   
  // }
// }
// export function actionGetSingleUserOk(user){
  // return{
    // type: GET_SINGLE_USER_OK,
    // payload: user
  // }
// }
// export function actionGetSingleUserFail(error){
  // return{
    // type: GET_SINGLE_USER_FAIL,
    // payload:error
  // }
// }

// export function getSingleUser(userId){
  // return async (dispatch)=>{
    // dispatch(actionGetSingleUser(userId))
    // try {
      // const response = await axios.get(`http://localhost:3000/users/${userId}`)
      // console.log(response, "respuesta de action singleUser")
      // dispatch(actionGetSingleUserOk(response.data))
    // } catch (error) {
      // dispatch(actionGetSingleUserFail(error))
    // }
  // }
// }