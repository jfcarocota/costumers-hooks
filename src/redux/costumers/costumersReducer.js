import {
  COSTUMERS_TRY_RESULTS,
  COSTUMERS_SELECT
} from "./costumersType";

const initialState = {
  costumersResults: [],
  costumerSelected: ''
}

const costumersReducer = (state = initialState, {type, payload}) => {
  switch(type){
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