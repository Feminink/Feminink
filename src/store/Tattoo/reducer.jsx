import {
    DO_CONTACT, DO_CONTACT_OK, DO_CONTACT_FAIL,
    DO_CONTACT_2, DO_CONTACT_2_OK, DO_CONTACT_2_FAIL,
    GET_MESSAGES, GET_MESSAGES_OK, GET_MESSAGES_FAIL,
    GET_SINGLE_MESSAGE, GET_SINGLE_MESSAGE_OK, GET_SINGLE_MESSAGE_FAIL,
    DELETE_MESSAGE,DELETE_MESSAGE_OK, DELETE_MESSAGE_FAIL,
    GET_DISCOUNT, GET_DISCOUNT_OK, GET_DISCOUNT_FAIL
} from './actionTypes';

const firstState = {
    form: {},
    messages: [],
    message: {},
    discount: {},
    loadingDiscount: false,
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

        case DO_CONTACT_2:
        state = {...state, loadingForm:true} 
        break
        case DO_CONTACT_2_OK:
        state = {...state, loadingForm: false, form: action.payload} 
        break
        case DO_CONTACT_2_FAIL:
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

    
        case GET_SINGLE_MESSAGE: 
        state = {...state, loadingMessages: true}
        break
        
        case GET_SINGLE_MESSAGE_OK: 
        state = {...state, loadingMessages: false, message:action.payload}
        break
        
        case GET_SINGLE_MESSAGE_FAIL: 
        state = {...state, loadingMessages: false, error: {message: action.payload}}
        break
        

        
        case DELETE_MESSAGE: 
        state = {...state}
        break
        
        case DELETE_MESSAGE_OK: 
        state = {...state, message: action.payload}
        break
        
        case DELETE_MESSAGE_FAIL: 
        state = {...state, message: {}, error:{message: action.payload}}
        break


        case GET_DISCOUNT:
        state = {...state, loadingDiscount: true}
        break
        case GET_DISCOUNT_OK:
        state = {...state, loadingDiscount: false, discount:action.payload }
        break
        case GET_DISCOUNT_FAIL:
        state = {...state, loadingDiscount:false,  discount: {}, error: {message:action.payload} }
        break        

        default:
            break

    }
    return state;
}