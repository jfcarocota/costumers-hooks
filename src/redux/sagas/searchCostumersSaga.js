import { put, call, takeLatest } from 'redux-saga/effects';
import { COSTUMERS_FETCH_RESULTS } from "../costumers/costumersType";
import { costumersSearchCall } from "../api/apiCall";
import { costumerFetchSucess } from "../costumers/costumersActions";

function* getCostumersSearch({payload}){
  try{
    console.log(payload.filter);
    const results = yield call(costumersSearchCall, payload.filter);
    console.log(results);
    yield put(costumerFetchSucess(results));
  }catch(error){
    console.log(error);
  }
}

function* serachCostumersSaga(){
  yield takeLatest(COSTUMERS_FETCH_RESULTS, getCostumersSearch);
}

export default serachCostumersSaga;