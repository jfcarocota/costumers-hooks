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

import { TRY_LOGIN } from "./authTypes";

export const tryLogin = (token) => {
  return {
    type: TRY_LOGIN,
    payload: {
      token
    }
  }
}