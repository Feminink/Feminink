import axios from "axios";
import {
  GET_GALLERY,
  GET_GALLERY_OK,
  GET_GALLERY_FAIL,
  GET_DETAIL,
  GET_DETAIL_OK,
  GET_DETAIL_FAIL,
  DO_REGISTRATION,
  DO_REGISTRATION_OK,
  DO_REGISTRATION_FAIL,
} from "./actionTypes";

const backGallery = "http://localhost:3000/gallery";
const backUsers = "http://localhost:3000/users";

/* FUNCTION TO RENDER GALLERY */

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

/* FUNCTION TO RENDER SINGLE PAGE */
export function actionGetDetail(detailId) {
  return {
    type: GET_DETAIL,
    payload: detailId,
  };
}
export function actionGetDetailOk(detail) {
  return {
    type: GET_DETAIL_OK,
    payload: detail,
  };
}
export function actionGetDetailFail(error) {
  return {
    type: GET_DETAIL_FAIL,
    payload: error,
  };
}

export function getDetail(detailId) {
  return async (dispatch) => {
    dispatch(actionGetDetail(detailId));
    try {
      const response = await axios.get(`${backGallery}/${detailId}`);
      dispatch(actionGetDetailOk(response.data));
    } catch (error) {
      dispatch(actionGetDetailFail(error));
    }
  };
}

/* FUNCTION TO REGISTER NEW USER */
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
      console.log(response, "res");
      dispatch(actionDoRegistrationOk(response.data));
      console.log(response.data, "res.data");
    } catch (error) {
      dispatch(actionDoRegistrationFail(error));
    }
  };
}
