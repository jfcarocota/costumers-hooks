import { COSTUMERS_TRY_RESULTS } from "./costumersType";

export const tryCostumersResults = (costumersResults)=> {
  return {
    type: COSTUMERS_TRY_RESULTS,
    payload: {
      costumersResults
    }
  }
}