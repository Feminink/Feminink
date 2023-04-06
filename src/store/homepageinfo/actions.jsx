import axios from 'axios';

import { GET_OUR_TEAM, GET_OUR_TEAM_OK, GET_OUR_TEAM_FAIL } from './actionTypes';

const backOurTeam = "http://localhost:3000/admins";

// FUNCION ACTIONGETOURTEAM
export function actionGetOurTeam(){
    return{
        type: GET_OUR_TEAM
    }
}

export function actionGetOurTeamOk(ourTeam){
    return{
        type: GET_OUR_TEAM_OK,
        payload: ourTeam
    }
}

export function actionGetOurTeamFail(error){
    return{
        type: GET_OUR_TEAM_FAIL,
        payload: error
    }
}

export function getOurTeam(){
    return async (dispatch) =>{
        try {
            dispatch(actionGetOurTeam());
            const res = await axios.get(backOurTeam)
            dispatch(actionGetOurTeamOk(res.data))
            console.log(res.data, "respuesta de action")
        } catch (error) {
            dispatch(actionGetOurTeamFail)
        }
    }
}