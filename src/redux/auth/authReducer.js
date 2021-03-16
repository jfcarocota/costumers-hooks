import {
  FETCH_lOGIN_REQUEST,
  FETCH_lOGIN_SUCESS,
  FETCH_lOGIN_FAILURE,
  TRY_LOGIN,
  LOGOUT
} from "./authTypes"

const initialState = {
  authenticated: false,
  loading: false,
  error: false
}

const authReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case TRY_LOGIN:
      return {
        ...state,
        loading: true
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
          error: false
        }
      case FETCH_lOGIN_FAILURE:
        return {
          loading: false,
          error: true
        }
    default: return state
  }
}

export default authReducer;