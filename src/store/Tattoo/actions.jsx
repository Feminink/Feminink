import axios from 'axios';

import {
    GET_INSPIRATION, GET_INSPIRATION_OK, GET_INSPIRATION_FAIL
} from './actionTypes';


const backInspiration = "http://localhost:3000/inspiration"
export function actionGetInspiration(){
    return{
        type: GET_INSPIRATION
        
    }
}
export function actionGetInspirationOk(inspiration){
    return{
        type: GET_INSPIRATION_OK,
        payload: inspiration
    }
}
export function actionGetInspirationFail(error){
    return{
        type: GET_INSPIRATION_FAIL,
        payload: error
    }
}

export function getInspiration(){
    return async (dispatch) =>{
        try {
            dispatch(actionGetInspiration());
            const res = await axios.get(backInspiration)
            dispatch(actionGetInspirationOk(res.data))
            console.log(res.data, "respuesta de action")
        } catch (error) {
            dispatch(actionGetInspirationFail)
        }
    }
}