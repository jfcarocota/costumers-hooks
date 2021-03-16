import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_lOGIN_REQUEST } from "../auth/authTypes";
import axios from "axios";
import { authCall } from "../api/apiCall";

function* loginRequest({payload}){
  try{
    //console.log(payload);
    const token = yield call(authCall, payload.email, payload.password);
    console.log(token);
  }catch(error){
    console.log(error);
  }
}

function* authSaga(){
  yield takeLatest(FETCH_lOGIN_REQUEST, loginRequest);
}

export default authSaga;