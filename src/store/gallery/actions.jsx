import axios from "axios";
import {
  GET_GALLERY,
  GET_GALLERY_OK,
  GET_GALLERY_FAIL,
  DO_REGISTRATION,
  DO_REGISTRATION_OK,
  DO_REGISTRATION_FAIL,
} from "./actionTypes";

const backGallery = "http://localhost:3000/gallery";
const backUsers = "http://localhost:3000/users";

export function actionGetGallery() {
  return {
    type: GET_GALLERY,
  };
}
export function actionGetGalleryOk(gallery) {
  return {
    type: GET_GALLERY_OK,
    payload: gallery,
  };
}
export function actionGetGalleryFail(error) {
  return {
    type: GET_GALLERY_FAIL,
    payload: error,
  };
}

export function getGallery() {
  return async (dispatch) => {
    dispatch(actionGetGallery());
    try {
      const response = await axios.get(backGallery);
      dispatch(actionGetGalleryOk(response.data));
      console.log(response.data, "respuesta de action");
    } catch (error) {
      dispatch(actionGetGalleryFail);
    }
  };
}

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

export function doRegistration(registrationForm) {
  return async (dispatch) => {
    try {
      dispatch(actionDoRegistration(registrationForm));
      const response = await axios.post(backUsers, registrationForm);
      // console.log(res, "res")
      dispatch(actionDoRegistrationOk(response.data));
      // console.log(res.data, "res.data")
    } catch (error) {
      dispatch(actionDoRegistrationFail(error));
    }
  };
}
