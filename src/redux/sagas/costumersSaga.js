import { put, call, takeLatest } from 'redux-saga/effects';
import { COSTUMERS_FETCH_RESULTS } from "../costumers/costumersType";

function* getCostumersSearch({payload}){
  try{
    console.log('im listening');
  }catch(error){
    console.log(error);
  }
}

function* costumersSaga(){
  yield takeLatest(COSTUMERS_FETCH_RESULTS, getCostumersSearch);
}

export default costumersSaga;