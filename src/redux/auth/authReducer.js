import TRY_lOGIN from "./authTypes";

const initialState = {
  token: 'no token exist'
}

const authReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case TRY_lOGIN:
      return {
        ...state,
        token: 'new token'
      }
    default: return state;
  }
}

export default authReducer;