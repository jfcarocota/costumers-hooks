import { put, call, takeLatest } from 'redux-saga/effects';
import { COSTUMER_START_FETCH } from "../costumers/costumersType";
import { costumerInfoResultCall } from "../api/apiCall";

function* getCostumer({payload}){
  try{
    const costumer = yield call(costumerInfoResultCall, payload.id);
    console.log(costumer);
  }catch(error){
    console.log(error);
  }
}

function* costumersSaga(){
  yield takeLatest(COSTUMER_START_FETCH, getCostumer);
}

export default costumersSaga;