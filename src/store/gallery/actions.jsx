import axios from "axios";
import {
  DO_REGISTRATION,
  DO_REGISTRATION_OK,
  DO_REGISTRATION_FAIL,
  GET_USERS,
  GET_USERS_OK,
  GET_USERS_FAIL,
} from "./actionTypes";

const backUsers = "http://localhost:3000/users";

// TO POST REGISTRATION DETAILS IN BACK: USERS
export function actionDoRegistration(registrationForm) {
  return {
    type: DO_REGISTRATION,
    payload: registrationForm,
  };
}
export function actionDoRegistrationOk(userDetails) {
  return {
    type: DO_REGISTRATION_OK,
    payload: userDetails,
  };
}
export function actionDoRegistrationFail(error) {
  return {
    type: DO_REGISTRATION_FAIL,
    payload: error,
  };
}

// FUNCTION TO POST NEW USER DETAILS TO BACK
export function doRegistration(registrationForm) {
  return async (dispatch) => {
    try {
      dispatch(actionDoRegistration(registrationForm));
      const response = await axios.post(backUsers, registrationForm);
      console.log(response, "res");
      dispatch(actionDoRegistrationOk(response.data));
      console.log(response.data, "res.data");
    } catch (error) {
      dispatch(actionDoRegistrationFail(error));
    }
  };
}


// FUNCION ACTIONGETUSERS
export function actionGetUsers() {
  return {
    type: GET_USERS,
  };
}

export function actionGetUsersOk(users) {
  return {
    type: GET_USERS_OK,
    payload: users,
  };
}

export function actionGetUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    payload: error,
  };
}

// FUNCTION GETUSERS
export function getUsers() {
  return async (dispatch) => {
    try {
      dispatch(actionGetUsers());
      const response = await axios.get(backUsers);
      dispatch(actionGetUsersOk(response.data));
      console.log(response.data, "respuesta de action");
    } catch (error) {
      dispatch(actionGetUsersFail);
    }
  };
}
