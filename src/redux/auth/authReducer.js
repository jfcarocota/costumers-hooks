/*import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE
} from "./authTypes"*/

import { TRY_LOGIN } from "./authTypes";

const initialState = {
  token: 'no token'
}

const authReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case TRY_LOGIN:
      return {
        ...state,
        token: payload.token
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