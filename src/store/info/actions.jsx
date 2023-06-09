import axios from "axios";

import { GET_INFO, GET_INFO_OK, GET_INFO_FAIL } from "./actionTypes";

const backInfo = "https://back-user-r91n4x7sc-feminink.vercel.app/results";
// const backInfo = "http://localhost:3000/results";

/* FUNCTION TO RENDER INFO */

export function actionGetInfo() {
  return {
    type: GET_INFO,
  };
}
export function actionGetInfoOk(info) {
  return {
    type: GET_INFO_OK,
    payload: info,
  };
}
export function actionGetInfoFail(error) {
  return {
    type: GET_INFO_FAIL,
    payload: error,
  };
}
export function getInfo() {
  return async (dispatch) => {
    try {
      dispatch(actionGetInfo());
      const res = await axios.get(backInfo);
      dispatch(actionGetInfoOk(res.data));
    } catch (error) {
      dispatch(actionGetInfoFail);
    }
  };
}
