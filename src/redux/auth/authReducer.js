import TRY_lOGIN from "./authTypes";
//import { useLazyQuery, gql } from '@apollo/client';

const initialState = {
  token: 'no token exist'
}

const authReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case TRY_lOGIN:
      return {
        ...state,
        token: `${payload.email}:${payload.password}`
      }
    default: return state;
  }
}

export default authReducer;