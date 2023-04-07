import axios from 'axios';
import Messages from '../../pages/Messages/Messages';

import {
    
    DO_CONTACT, DO_CONTACT_FAIL, DO_CONTACT_OK,
    GET_MESSAGES, GET_MESSAGES_OK, GET_MESSAGES_FAIL, GET_SINGLE_MESSAGE, GET_SINGLE_MESSAGE_OK, GET_SINGLE_MESSAGE_FAIL
} from './actionTypes';


const backContact = "http://localhost:3000/contact";

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
            
            const res = await axios.post(backContact, userContactForm)
            dispatch(actionDoContactOk(res.data))
        } catch (error) {
            dispatch(actionDoContactFail(error))
        }
    }
}

//FUNCIÖN PARA OBTENER LOS MENSAJES DE CONTACTO
export function actionGetMessages(){
    return{
        type: GET_MESSAGES
       
    }
}
export function actionGetMessagesOk(messages){
    return{
        type: GET_MESSAGES_OK,
        payload: messages
    }
}
export function actionGetMessagesFail(error){
    return{
        type: GET_MESSAGES_FAIL,
        payload: error
    }
}

export function getMessages(){
    return async (dispatch)=>{
        dispatch(actionGetMessages())
        try {
           const response = await axios.get(backContact)
           dispatch(actionGetMessagesOk(response.data))
            
        } catch (error) {
            dispatch(actionGetMessagesFail(error))
        }
    }
}

export function actionGetSingleMessage(messageId){
    return{
        type: GET_SINGLE_MESSAGE,
        payload: messageId
        
    }
}
export function actionGetSingleMessageOk(message){
    return{
        type: GET_SINGLE_MESSAGE_OK ,
        payload: message
    }
}
export function actionGetSingleMessageFail(error){
    return{
        type:  GET_SINGLE_MESSAGE_FAIL,
        pauload: error
    }
}

export function getSingleMessage(messageId){
    return async (dispatch)=> {
        dispatch(actionGetSingleMessage(messageId))
        try {
            const response = await axios.get(`${backContact}/${messageId}`)
            console.log(response.data, "response")
            dispatch(actionGetSingleMessageOk(response.data))
        } catch (error) {
            dispatch(actionGetSingleMessageFail(error))
        }
    }
}