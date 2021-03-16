import { all } from 'redux-saga/effects';
import costumersSaga from "./costumersSaga";
import authSaga from "./authSaga";
import sessionSaga from "./sessionSaga";

function* rootSaga(){
  yield all([
    costumersSaga(),
    authSaga(),
    sessionSaga()
  ]);
}

export default rootSaga;