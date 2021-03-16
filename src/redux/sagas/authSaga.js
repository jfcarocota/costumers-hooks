import { put, call, takeLatest } from 'redux-saga/effects';
import {
  FETCH_lOGIN_REQUEST
} from "../auth/authTypes";
import { authCall } from "../api/apiCall";
import { fetchLoginSucess, fetchLoginFailure } from '../auth/authActions';

function* loginRequest({payload}){
  try{
    const session = yield call(authCall, payload.email, payload.password);
    if(session){
      yield put(fetchLoginSucess(session));
    }else{
      yield put(fetchLoginFailure());
    }
  }catch(error){
    console.log(error);
  }
}

function* authSaga(){
  yield takeLatest(FETCH_lOGIN_REQUEST, loginRequest);
}

export default authSaga;