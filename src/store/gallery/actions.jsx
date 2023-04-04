import axios from "axios";
import { GET_GALLERY, GET_GALLERY_OK, GET_GALLERY_FAIL } from "./actionTypes";

const backGallery = "http://localhost:3000/gallery";

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
      dispatch(actionGetGalleryOk(response));
      console.log(response, "respuesta de action");
    } catch (error) {
      dispatch(actionGetGalleryFail);
    }
  };
}
