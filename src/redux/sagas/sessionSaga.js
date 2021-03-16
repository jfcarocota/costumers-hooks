import { put, call, takeLatest } from 'redux-saga/effects';
import {
  TRY_LOGIN
} from "../auth/authTypes";
import {sessionCall } from "../api/apiCall";
import { fetchLoginSucess } from '../auth/authActions';

function* sessionRequest(){
  try{
    const session = yield sessionCall();
    if(session){
      yield put(fetchLoginSucess(session));
    }
  }catch(error){
    console.log(error);
  }
}

function* sessionSaga(){
  yield takeLatest(TRY_LOGIN, sessionRequest);
}

export default sessionSaga;