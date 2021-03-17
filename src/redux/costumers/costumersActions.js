import {
  COSTUMERS_SELECT,
  COSTUMERS_FETCH_RESULTS,
  COSTUMERS_FETCH_SUCESS,
  COSTUMERS_FETCH_FAILURE
} from "./costumersType";

export const costumerSelect = (costumerSelected)=> {
  return {
    type: COSTUMERS_SELECT,
    payload: {
      costumerSelected
    }
  }
}

export const costumerFetchResults = filter => ({
  type: COSTUMERS_FETCH_RESULTS,
  payload: {
    filter
  }
});
export const costumerFetchSucess = (costumersResults)=> ({
  type: COSTUMERS_FETCH_SUCESS,
  payload:{
    loading: false,
    costumersResults
  }
});