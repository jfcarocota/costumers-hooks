import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE,
  LOGIN_SUCESS,
  LOGOUT
} from "./authTypes"

const initialState = {
  authenticated: false,
  loading: false,
  error: ''
}

const authReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case LOGIN_SUCESS:
      return {
        ...state,
        authenticated: true
      }
    case LOGOUT:
      return {
        ...state,
        authenticated: false
      }
      case FETCH_lOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_lOGIN_SUCESS:
        return{
          loading: false,
          authenticated: true,
          error: ''
        }
      case FETCH_lOGIN_FAILURE:
        return {
          loading: false,
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