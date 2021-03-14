import {
  COSTUMERS_TRY_RESULTS,
  COSTUMERS_SELECT,
  COSTUMERS_FETCH_RESULTS,
  COSTUMERS_FETCH_SUCESS,
  COSTUMERS_FETCH_FAILURE
} from "./costumersType";
import axios from "axios";

import { GET_COSTUMERS_SEARCH } from "../../graphql/queries";

export const tryCostumersResults = (costumersResults)=> {
  return {
    type: COSTUMERS_TRY_RESULTS,
    payload: {
      costumersResults
    }
  }
}

export const costumerSelect = (costumerSelected)=> {
  return {
    type: COSTUMERS_SELECT,
    payload: {
      costumerSelected
    }
  }
}

const costumerFetchResults = ()=> {
  return {
    type: COSTUMERS_FETCH_RESULTS
  }
}

export const fetchCostumersSearch = (filter) => {
  return dispatch =>{
    dispatch(costumerFetchResults());
    axios.post(process.env.REACT_APP_API_URL, {
      query: GET_COSTUMERS_SEARCH,
      variables: {
        filter
      }
    })
    .then(({data}) => console.log(data))
    .catch(error => console.log(error));
  }
}