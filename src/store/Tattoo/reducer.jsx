import {
    GET_INSPIRATION, GET_INSPIRATION_OK, GET_INSPIRATION_FAIL
} from './actionTypes';

const firstState = {
    inspiration: [],
    loadginInspiration: false,
    error: {
        message: "",
      },
}

export default function TattooReducer(state = firstState, action){
    switch(action.type){

        case GET_INSPIRATION:
        state = {...state, loadginInspiration:true}
        break
        case GET_INSPIRATION_OK:
        state = {...state, loadginInspiration: false, inspiration: action.payload}
        break 
        case GET_INSPIRATION_FAIL:
        state = {...state, loadginInspiration:false, error: {message: action.payload}}
        break
        default:
            break

    }
    return state;
}