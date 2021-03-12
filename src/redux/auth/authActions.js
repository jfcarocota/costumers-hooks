import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE,
  LOGOUT
} from "./authTypes";
import jwt from 'jsonwebtoken';
import axios from "axios";
import { AUTHENTICATE } from "../../graphql/queries";

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
      //console.log(token);
      const tokenData = jwt.verify(token, process.env.REACT_APP_TOKEN_KEY);
      //console.log(tokenData);
      if (tokenData) {
        localStorage.setItem(process.env.REACT_APP_APP_KEY, JSON.stringify({ token: token, user: tokenData.email }));
        //console.log(localStorage.getItem(process.env.REACT_APP_APP_KEY));
        dispatch(fetchLoginSucess());
      }
    } catch (error) {
      console.log(error.message);
      dispatch(tryLogout());
    }
  }
}

const fetchLoginRequest = ()=> {
  return {
    type: FETCH_lOGIN_REQUEST
  }
}

const fetchLoginSucess = ()=> {
  return {
    type: FETCH_lOGIN_SUCESS
  }
}

const fetchLoginFailure = () => {
  return {
    type: FETCH_lOGIN_FAILURE
  }
}

export const fetchLogin = (email, password)=> {
  return dispatch =>{
    dispatch(fetchLoginRequest());
    axios.post(process.env.REACT_APP_API_URL, {
      query: AUTHENTICATE,
      variables:{email, password}
    })
    .then(({data}) =>{
      //dispatch(fetchLoginSucess());
      console.log(data);
      if(data?.data?.login?.token){
        console.log(data.data.login.token)
        try {
          //console.log(token);
          const tokenData = jwt.verify(data.data.login.token, process.env.REACT_APP_TOKEN_KEY);
          //console.log(tokenData);
          if (tokenData) {
            localStorage.setItem(process.env.REACT_APP_APP_KEY, JSON.stringify({ token: data.data.login.token, user: tokenData.email }));
            //console.log(localStorage.getItem(process.env.REACT_APP_APP_KEY));
            dispatch(fetchLoginSucess());
          }else{
            dispatch(fetchLoginFailure());
          }
        } catch (error) {
          console.log(error.message);
          dispatch(fetchLoginFailure(error));
          dispatch(tryLogout());
        }
      }else{
        dispatch(fetchLoginFailure());
      }
    })
    .catch(error =>{
      dispatch(fetchLoginFailure(error));
      console.log(error);
    });
  }
}