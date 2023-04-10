import axios from "axios";

export const APIHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Authorization': {
      toString () {
          return `Bearer ${localStorage.getItem('token')}`
      }
  }
};
 //ES EN ESTE PUERTO ?

export const API = axios.create({

  baseUrl: "http://localhost:3000",

  headers: APIHeaders,
});