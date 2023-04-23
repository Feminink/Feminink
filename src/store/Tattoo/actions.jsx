import axios from "axios";

import {
  DO_CONTACT,
  DO_CONTACT_FAIL,
  DO_CONTACT_OK,
  DO_CONTACT_2,
  DO_CONTACT_2_FAIL,
  DO_CONTACT_2_OK,
  GET_MESSAGES,
  GET_MESSAGES_OK,
  GET_MESSAGES_FAIL,
  GET_SINGLE_MESSAGE,
  GET_SINGLE_MESSAGE_OK,
  GET_SINGLE_MESSAGE_FAIL,
  DELETE_MESSAGE,
  DELETE_MESSAGE_FAIL,
  DELETE_MESSAGE_OK,
  GET_DISCOUNT,
  GET_DISCOUNT_OK, 
  GET_DISCOUNT_FAIL
  
} from "./actionTypes";

const backContact = "http://localhost:3000/contact";
const backDiscount = "http://localhost:3000/discounts"

// FUNCIÖN PARA POSTEAR DATA EN JSON: CONTACT
export function actionDoContact(contactForm) {
  return {
    type: DO_CONTACT,
    payload: contactForm,
  };
}

export function actionDoContactOk(mail) {
  return {
    type: DO_CONTACT_OK,
    payload: mail,
  };
}

export function actionDoContactFail(error) {
  return {
    type: DO_CONTACT_FAIL,
    payload: error,
  };
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

// FUNCIÖN PARA POSTEAR DATA EN JSON: CONTACT 2
export function actionDoContact2(contactForm2) {
  return {
    type: DO_CONTACT_2,
    payload: contactForm2,
  };
}

export function actionDoContact2Ok(mail2) {
  return {
    type: DO_CONTACT_2_OK,
    payload: mail2,
  };
}

export function actionDoContact2Fail(error2) {
  return {
    type: DO_CONTACT_2_FAIL,
    payload: error2,
  };
}

export function doContact2(userContactForm2){
  return async (dispatch)=>{
      dispatch(actionDoContact2(userContactForm2))
      try {
          const res = await axios.post(backContact, userContactForm2)
          dispatch(actionDoContact2Ok(res.data))
      } catch (error) {
          dispatch(actionDoContact2Fail(error))
      }
  }
}

//FUNCIÖN PARA OBTENER LOS MENSAJES DE CONTACTO
export function actionGetMessages() {
  return {
    type: GET_MESSAGES,
  };
}

export function actionGetMessagesOk(messages) {
  return {
    type: GET_MESSAGES_OK,
    payload: messages,
  };
}

export function actionGetMessagesFail(error) {
  return {
    type: GET_MESSAGES_FAIL,
    payload: error,
  };
}

export function getMessages() {
  return async (dispatch) => {
    dispatch(actionGetMessages());
    try {
      const response = await axios.get(backContact);
      dispatch(actionGetMessagesOk(response.data));
    } catch (error) {
      dispatch(actionGetMessagesFail(error));
    }
  };
}

export function actionGetSingleMessage(messageId) {
  return {
    type: GET_SINGLE_MESSAGE,
    payload: messageId,
  };
}

export function actionGetSingleMessageOk(message) {
  return {
    type: GET_SINGLE_MESSAGE_OK,
    payload: message,
  };
}

export function actionGetSingleMessageFail(error) {
  return {
    type: GET_SINGLE_MESSAGE_FAIL,
    pauload: error,
  };
}

export function getSingleMessage(messageId) {
  return async (dispatch) => {
    dispatch(actionGetSingleMessage(messageId));
    try {
      const response = await axios.get(`${backContact}/${messageId}`);
      dispatch(actionGetSingleMessageOk(response.data));
    } catch (error) {
      dispatch(actionGetSingleMessageFail(error));
    }
  };
}

// FUNCIÖN PARA BORRAR DATA EN JSON: CONTACT MESSAGES
export function actionDeleteMessage(messageId) {
  return {
    type: DELETE_MESSAGE,
    payload: messageId,
  };
}

export function actionDeleteMessageOk(message) {
  return {
    type: DELETE_MESSAGE_OK,
    payload: message,
  };
}

export function actionDeleteMessageFail(error) {
  return {
    type: DELETE_MESSAGE_FAIL,
    payload: error,
  };
}

export function deleteMessage(messageId) {
  return async (dispatch) => {
    dispatch(actionDeleteMessage(messageId));
    try {
      const response = await axios.delete(`${backContact}/${messageId}`);
      dispatch(actionDeleteMessageOk(response.data));
     
    } catch (error) {
      dispatch(actionDeleteMessageFail(error));
    }
  };


}


//FUNCIÖN PARA RENDERIZAR DESCUENTOS 

export function actionGetDiscount(){
  return{
   type: GET_DISCOUNT
   
  }
}
export function actionGetDiscountOk(discount){
  return{
   type: GET_DISCOUNT_OK,
    payload: discount
  }
}
export function actionGetDiscountFail(error){
  return{
   type: GET_DISCOUNT_FAIL,
    payload: error
  }
}

export function getDiscount(){
  return async (dispatch) =>{
    dispatch(actionGetDiscount);
    try {
      const response = await axios.get(backDiscount);
      dispatch(actionGetDiscountOk(response.data))
      console.log(response.data, "resdata discount")
    } catch (error) {
      dispatch(actionGetDiscountFail(error));
    }
  }


}