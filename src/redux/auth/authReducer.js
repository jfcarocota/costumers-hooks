/*import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE
} from "./authTypes"*/
import jwt from 'jsonwebtoken';
import { TRY_LOGIN, LOGIN_ERROR } from "./authTypes";

const initialState = {
  authenticated: false,
  error:''
}

const authReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case TRY_LOGIN:
      return {
        ...state,
        authenticated: ()=> {
          try {
            const tokenData = jwt.verify(payload.token, 'secret');
            if (tokenData) {
              localStorage.setItem(process.env.REACT_APP_APP_KEY, JSON.stringify({ token: payload.token, user: tokenData.email }));
              return true;
            }
          } catch (error) {
            console.log(error.message);
            localStorage.removeItem(process.env.REACT_APP_APP_KEY);
            return false;
          }
        }
      }
    case LOGIN_ERROR:
      return {
        ...state,
        error: payload.error
      }
    default: return state
  }
}

/*const initialState = {
  token: 'no token exist'
}*/

/*const initialState = {
  loading: false,
  token: '',
  error: ''
}

const authReducer = (state = initialState, {type, payload}) => {

  switch(type){
    case FETCH_lOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_lOGIN_SUCESS:
      return{
        loading: false,
        token: payload.token,
        error: ''
      }
      case FETCH_lOGIN_FAILURE:
        return {
          loading: false,
          token: '',
          error: payload
        }
    default: return state;
  }
}*/

export default authReducer;