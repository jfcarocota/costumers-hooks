/*import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE
} from "./authTypes";

import { useLazyQuery } from '@apollo/client';
import { LOGIN_QUERY } from "../../graphql/queries";

const fetchLoginRequest = ()=> {
  return {
    type: FETCH_lOGIN_REQUEST
  }
}

const fetchLoginSucess = (token)=> {
  return {
    type: FETCH_lOGIN_SUCESS,
    payload: {
      token
    }
  }
}

const fetchLoginFailure = error => {
  return {
    type: FETCH_lOGIN_FAILURE,
    payload: error
  }
}

export const fetchLogin = (email, password)=> {
  return dispatch =>{
    dispatch(fetchLoginRequest);
    useLazyQuery(LOGIN_QUERY, {
      variables: { email, password },
      onCompleted: (data) => {
        if (data?.login?.token) {
          const {token} = data.login;
          dispatch(fetchLoginSucess(token));
        } else {
          dispatch(fetchLoginFailure('Credenciales invalidas'));
        }
      },
      onError: error =>{
        dispatch(fetchLoginFailure(error));
      }
    });
  }
}*/

/*
()=> {
    try {
      console.log(payload.token);
      const tokenData = jwt.verify(payload.token, process.env.REACP_APP_TOKEN_KEY);
      console.log(tokenData);
      if (tokenData) {
        localStorage.setItem(process.env.REACT_APP_APP_KEY, JSON.stringify({ token: payload.token, user: tokenData.email }));
        console.log(localStorage.getItem(process.env.REACT_APP_APP_KEY));
        return true;
      }
    } catch (error) {
      console.log(error.message);
      localStorage.removeItem(process.env.REACT_APP_APP_KEY);
      return false;
    }
  }
*/

import { LOGOUT, LOGIN_SUCESS } from "./authTypes";
import jwt from 'jsonwebtoken';

const loginSucess = () => {
  return {
    type: LOGIN_SUCESS
  }
}

const logout = () => {
  return {
    type: LOGOUT
  }
}

export const tryLogout = ()=>{
  return dispatch =>{
    dispatch(logout());
    localStorage.removeItem(process.env.REACT_APP_APP_KEY);
  }
}

export const tryLogin = (token) => {
  return dispatch =>{
    try {
      console.log(token);
      const tokenData = jwt.verify(token, process.env.REACT_APP_TOKEN_KEY);
      console.log(tokenData);
      if (tokenData) {
        localStorage.setItem(process.env.REACT_APP_APP_KEY, JSON.stringify({ token: token, user: tokenData.email }));
        //console.log(localStorage.getItem(process.env.REACT_APP_APP_KEY));
        dispatch(loginSucess());
      }
    } catch (error) {
      console.log(error.message);
      dispatch(tryLogout());
    }
  }
}