import axios from 'axios';

import { GET_INFO, GET_INFO_OK, GET_INFO_FAIL } from './actionTypes';

const backInfo = "http://localhost:3000/results";

// FUNCION ACTIONGETOURTEAM
export function actionGetInfo(){
    return{
        type: GET_INFO
    }
}

export function actionGeInfoOk(info){
    return{
        type: GET_INFO_OK,
        payload: info
    }
}

export function actionGeInfoFail(error){
    return{
        type: GET_INFO_FAIL,
        payload: error
    }
}

// FUNCTION GET INFO
export function getInfo(){
    return async (dispatch) =>{
        try {
            dispatch(actionGetInfo());
            const res = await axios.get(backInfo)
            dispatch(actionGeInfoOk(res.data))
            console.log(res.data, "respuesta de action")
        } catch (error) {
            dispatch(actionGeInfoFail)
        }
    }
}