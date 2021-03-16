import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_lOGIN_REQUEST } from "../auth/authTypes";

function* loginRequest({payload}){
  try{
    console.log('im listening');
  }catch(error){
    console.log(error);
  }
}

function* authSaga(){
  yield takeLatest(FETCH_lOGIN_REQUEST, loginRequest);
}

export default authSaga;