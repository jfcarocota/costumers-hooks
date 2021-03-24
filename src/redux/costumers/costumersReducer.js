import {
  COSTUMERS_SELECT,
  COSTUMERS_FETCH_SUCESS,
  COSTUMERS_FETCH_RESULTS,
  COSTUMER_START_FETCH
} from "./costumersType";

const initialState = {
  loading: false,
  costumersResults: [],
  costumerSelected: '',
  costumerInfo: {
    fullName: '',
    phonNumber: '',
    email: '',
    packages:[]
  }
}

const costumersReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case COSTUMERS_FETCH_RESULTS:
      return {
        ...state,
        loading: true
      }
    case COSTUMERS_FETCH_SUCESS:
      return {
        ...state,
        costumersResults: payload.costumersResults
      }
    case COSTUMERS_SELECT:
      return {
        ...state,
        costumerSelected: payload.costumerSelected
      }
    case COSTUMER_START_FETCH:
      return {
        ...state,
        fullName: payload.fullName,
        phonNumber: payload.phonNumber,
        email: payload.email
      }
    default: return state;
  }
}

export default costumersReducer;