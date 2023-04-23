import { GET_OUR_TEAM, GET_OUR_TEAM_OK, GET_OUR_TEAM_FAIL } from './actionTypes';

const firstState = {
    ourTeam: [],
    loadingOurTeam: false,
    error: {
        message: "",
    }
}

export default function TattooReducer(state = firstState, action){
    switch(action.type){
        // CASE GET_OUR_TEAM
        case GET_OUR_TEAM:
        state = {...state, loadingOurTeam:true}
        break
        // CASE GET_OUR_TEAM_OK
        case GET_OUR_TEAM_OK:
        state = {...state, loadingOurTeam: false, ourTeam: action.payload}
        break 
        // CASE GET_OUR_TEAM_FAIL
        case GET_OUR_TEAM_FAIL:
        state = {...state, loadingOurTeam:false, error: {message: action.payload}}
        break
        
        default:
        break

    }
    return state;
}