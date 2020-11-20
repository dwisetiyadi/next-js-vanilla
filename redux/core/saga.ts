/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import LoadSagas from '@config/redux/saga';
import { all } from 'redux-saga/effects';

export default function* reduxSaga() {
  yield all(LoadSagas);
}
