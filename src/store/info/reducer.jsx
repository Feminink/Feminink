import { GET_INFO, GET_INFO_OK, GET_INFO_FAIL } from './actionTypes';

const firstState = {
    info: [],
    loadingInfo: false,
    error: {
        message: "",
    }
}

export default function InfoReducer(state = firstState, action){
    switch(action.type){
        // CASE GET_INFO
        case GET_INFO:
        state = {...state, loadingInfo:true}
        break
        // CASE GET_INFO_OK
        case GET_INFO_OK:
        state = {...state, loadingInfo: false, Info: action.payload}
        break 
        // CASE GET_INFO_FAIL
        case GET_INFO_FAIL:
        state = {...state, loadingInfo:false, error: {message: action.payload}}
        break
        
        default:
        break

    }
    return state;
}