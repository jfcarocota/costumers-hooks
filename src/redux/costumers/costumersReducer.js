import {
  COSTUMERS_TRY_RESULTS,
  COSTUMERS_SELECT,
  COSTUMERS_FETCH_SUCESS,
  COSTUMERS_FETCH_RESULTS,
  COSTUMERS_FETCH_FAILURE
} from "./costumersType";

const initialState = {
  loading: false,
  costumersResults: [],
  costumerSelected: ''
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
    case COSTUMERS_TRY_RESULTS:
      return {
        ...state,
        costumersResults: payload.costumersResults
      }
    case COSTUMERS_SELECT:
      return {
        ...state,
        costumerSelected: payload.costumerSelected
      }
    default: return state;
  }
}

export default costumersReducer;