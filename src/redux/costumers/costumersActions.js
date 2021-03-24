import {
  COSTUMERS_SELECT,
  COSTUMERS_FETCH_RESULTS,
  COSTUMERS_FETCH_SUCESS,
  COSTUMER_START_FETCH
} from "./costumersType";

export const costumerSelect = (costumerSelected)=> {
  sessionStorage.setItem(
    process.env.REACT_APP_COSTUMER_KEY,
    JSON.stringify({costumerId: costumerSelected})
  );
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

export const costumerStartFetchById = id => ({
  type: COSTUMER_START_FETCH,
  payload:{
    id
  }
});