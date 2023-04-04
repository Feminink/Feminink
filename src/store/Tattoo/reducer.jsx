import {
    GET_INSPIRATION, GET_INSPIRATION_OK, GET_INSPIRATION_FAIL,
    DO_CONTACT, DO_CONTACT_OK, DO_CONTACT_FAIL
} from './actionTypes';

const firstState = {
    inspiration: [],
    loadingInspiration: false,
    form: {},
    loadingForm: false,
    error: {
        message: "",
      },
}

export default function TattooReducer(state = firstState, action){
    switch(action.type){

        case GET_INSPIRATION:
        state = {...state, loadingInspiration:true}
        break
        case GET_INSPIRATION_OK:
        state = {...state, loadingInspiration: false, inspiration: action.payload}
        break 
        case GET_INSPIRATION_FAIL:
        state = {...state, loadingInspiration:false, error: {message: action.payload}}
        break

        case DO_CONTACT:
        state = {...state, loadingForm:true} 
        break
        case DO_CONTACT_OK:
        state = {...state, loadingForm: false, form: action.payload} 
        break
        case DO_CONTACT_FAIL:
        state = {...state, loadingForm: false, form: {}, error: {message: action.payload}}
        break
        
        default:
            break

    }
    return state;
}