import { all } from 'redux-saga/effects';
import costumersSaga from "./costumersSaga";
import authSaga from "./authSaga";
import sessionSaga from "./sessionSaga";
import serachCostumersSaga from "./searchCostumersSaga";

function* rootSaga(){
  yield all([
    //costumersSaga(),
    serachCostumersSaga(),
    costumersSaga(),
    authSaga(),
    sessionSaga()
  ]);
}

export default rootSaga;