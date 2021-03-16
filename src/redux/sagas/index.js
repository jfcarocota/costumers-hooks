import { all } from 'redux-saga/effects';
import costumersSaga from "./costumersSaga";
import authSaga from "./authSaga";

function* rootSaga(){
  yield all([
    costumersSaga(),
    authSaga()
  ]);
}

export default rootSaga;