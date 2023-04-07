import {
    DO_CONTACT, DO_CONTACT_OK, DO_CONTACT_FAIL,
    GET_MESSAGES, GET_MESSAGES_OK, GET_MESSAGES_FAIL
} from './actionTypes';

const firstState = {
    form: {},
    messages: [],
    loadingMessages: false,
    loadingForm: false,
    error: {
        message: "",
      },
}

export default function TattooReducer(state = firstState, action){
    switch(action.type){


        case DO_CONTACT:
        state = {...state, loadingForm:true} 
        break
        case DO_CONTACT_OK:
        state = {...state, loadingForm: false, form: action.payload} 
        break
        case DO_CONTACT_FAIL:
        state = {...state, loadingForm: false, form: {}, error: {message: action.payload}}
        break

        case GET_MESSAGES:
        state = {...state, loadingMessages: true}
        break
        case GET_MESSAGES_OK:
        state = {...state, loadingMessages: false, messages: action.payload}
        break   
        case GET_MESSAGES_FAIL:
        state = {...state, loadingMessages: true, messages: [], error: {message: action.payload}}
        break
        
        default:
            break

    }
    return state;
}