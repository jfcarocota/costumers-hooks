import {
  COSTUMERS_SELECT,
  COSTUMERS_FETCH_RESULTS,
  COSTUMERS_FETCH_SUCESS,
  COSTUMERS_FETCH_FAILURE
} from "./costumersType";
import axios from "axios";

import { GET_COSTUMERS_SEARCH } from "../../graphql/queries";

export const costumerSelect = (costumerSelected)=> {
  return {
    type: COSTUMERS_SELECT,
    payload: {
      costumerSelected
    }
  }
}

export const costumerFetchResults = ()=> {
  return {
    type: COSTUMERS_FETCH_RESULTS
  }
}
const costumerFetchSucess = (costumersResults)=> {
  return {
    type: COSTUMERS_FETCH_SUCESS,
    payload:{
      loading: false,
      costumersResults
    }
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
    .then(({data}) => {
      dispatch(costumerFetchSucess(data.data.costumersSearch.map(costumer =>{
        const {fullName, id, phonNumber, email, packages} = costumer;
        const accounts = packages.map(element => `${element.parcel.name}: ${element.account}`);
        return {
          title: fullName,
          description: `${email}, ${phonNumber}, (${accounts.join()})`,
          id: id
        }
      })));
      //console.log(data.data.costumersSearch)
    })
    .catch(error => console.log(error));
  }
}