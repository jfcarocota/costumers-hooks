import {
  COSTUMERS_TRY_RESULTS,
  COSTUMERS_SELECT
} from "./costumersType";

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