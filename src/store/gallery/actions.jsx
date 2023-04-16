import axios from "axios";
import { connect } from 'react-redux'
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";

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
  SAVE_CODE, 
  SAVE_CODE_OK, 
  SAVE_CODE_FAIL
} from "./actionTypes";


function randomCode() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  localStorage.setItem("_code", code)
  return code
}



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

//FUNCTION TO SAVECODE
export function actionSaveCode(userId){
 return{
  type: SAVE_CODE,
  payload: userId
 }

}
export function actionSaveCodeOk(code){
  return {
    type: SAVE_CODE_OK,
    payload: code
  }
 
}
export function actionSaveCodeFail(error){
  return {
    type: SAVE_CODE_FAIL,
    payload:error
  }
 
}
export function saveCode(userId) {
  const code = randomCode();
  return async (dispatch) => {
    try {
      dispatch(actionSaveCode(userId));
      const response = await axios.post(`${backUsers}/${userId}/code`, code);
      dispatch(actionSaveCodeOk(response.data));
    } catch (error) {
      dispatch(actionSaveCodeFail(error));
    }}}

// export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);
