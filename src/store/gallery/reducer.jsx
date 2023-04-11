import {

  DO_REGISTRATION,
  DO_REGISTRATION_OK,
  DO_REGISTRATION_FAIL,
  GET_USERS,
  GET_USERS_OK,
  GET_USERS_FAIL,
} from "./actionTypes";

const initialState = {
  form: {},
  loadingForm: false,
  error: {
    message: "",
  },
  loadingUsers: false,
  users: {},
};

export default function GalleryReducer(state = initialState, action) {
  switch (action.type) {
    case DO_REGISTRATION:
      state = { ...state, loadingForm: true };
      break;
    case DO_REGISTRATION_OK:
      state = { ...state, loadingForm: false, form: action.payload };
      break;
    case DO_REGISTRATION_FAIL:
      state = {
        ...state,
        loadingForm: false,
        form: {},
        error: { message: action.payload },
      };
      break;
    case GET_USERS:
      state = { ...state, loadingUsers: true };
      break;
    case GET_USERS_OK:
      state = { ...state, loadingUsers: false, info: action.payload };
      break;
    case GET_USERS_FAIL:
      state = {
        ...state,
        loadingUsers: false,
        error: { message: action.payload },
      };
      break;

    default:
      break;
  }
  return state;
}
