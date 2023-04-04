import axios from 'axios';

import {
    GET_INSPIRATION, GET_INSPIRATION_OK, GET_INSPIRATION_FAIL,
    DO_CONTACT, DO_CONTACT_FAIL, DO_CONTACT_OK
} from './actionTypes';


const backInspiration = "http://localhost:3000/inspiration";
const backContact = "http://localhost:3000/contact";


// FUNCIÖN PARA OBTENER DATA DE JSON: WOMEN
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
// FUNCIÖN PARA POSTEAR DATA EN JSON: CONTACT
export function actionDoContact(contactForm){
    return{
        type: DO_CONTACT,
        payload:contactForm
    }
}
export function actionDoContactOk(mail){
    return{
        type: DO_CONTACT_OK,
        payload: mail
    }
}
export function actionDoContactFail(error){
    return{
        type: DO_CONTACT_FAIL,
        payload: error
    }
}

export function doContact(userContactForm){
    return async (dispatch)=>{
        dispatch(actionDoContact(userContactForm))
        try {
            const res = await axios.post("http://localhost:3000/contact", userContactForm)
            console.log(res, "res")
            dispatch(actionDoContactOk(res.data))
            console.log(res.data, "res.data")
        } catch (error) {
            dispatch(actionDoContactFail(error))
        }
    }
}