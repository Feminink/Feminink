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
  GET_USERS,
  GET_USERS_OK,
  GET_USERS_FAIL,
} from "./actionTypes";

const initialState = {
  gallery: [],
  loadingGallery: false,
  loadingDetail: false,
  detail: {},
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
    case GET_GALLERY:
      state = { ...state, loadingGallery: true };
      break;
    case GET_GALLERY_OK:
      state = {
        ...state,
        loadingGallery: false,
        gallery: action.payload,
      };
      break;
    case GET_GALLERY_FAIL:
      state = {
        ...state,
        loadingGallery: false,
        gallery: [],
        error: { message: action.payload },
      };
      break;

    case GET_DETAIL: {
      state = { ...state, loadingDetail: true };
      break;
    }
    case GET_DETAIL_OK: {
      state = { ...state, loadingDetail: false, detail: action.payload };
      break;
    }
    case GET_DETAIL_FAIL: {
      state = {
        ...state,
        loadingDetail: false,
        error: { message: action.payload },
      };
      break;
    }
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
      state = { ...state, loadingUsers: false, users: action.payload };
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
