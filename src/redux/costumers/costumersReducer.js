import { COSTUMERS_TRY_RESULTS } from "./costumersType";

const initialState = {
  costumersResults: []
}

const costumersReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case COSTUMERS_TRY_RESULTS:
      return {
        ...state,
        costumersResults: payload.costumersResults
      }
    default: return state;
  }
}

export default costumersReducer;