import {
  GET_GALLERY,
  GET_GALLERY_OK,
  GET_GALLERY_FAIL,
  DO_REGISTRATION,
  DO_REGISTRATION_OK,
  DO_REGISTRATION_FAIL,
} from "./actionTypes";

const initialState = {
  gallery: [],
  loadingGallery: false,
  form: {},
  loadingForm: false,
  error: {
    message: "",
  },
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

    default:
      break;
  }
  return state;
}
