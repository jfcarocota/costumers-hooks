import {createStore, applyMiddleware} from 'redux'
//import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import reduxSaga from 'redux-saga';

import rootSaga from "./sagas";

const reduxSagaMiddlerware = reduxSaga();

const store = {
  ...createStore(rootReducer, applyMiddleware(reduxSagaMiddlerware)),
  runSaga: reduxSagaMiddlerware.run(rootSaga)
};

export default store;

