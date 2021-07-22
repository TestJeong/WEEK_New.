import {all, takeEvery} from 'redux-saga/effects';
import apiSaga from '../saga/todoSaga';

export default function* rootSaga() {
  yield all([apiSaga()]);
}
