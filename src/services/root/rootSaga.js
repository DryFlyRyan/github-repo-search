import { all } from 'redux-saga/effects';
import { reposSagas } from '../repos/sagas';

export default function* rootSaga() {
  yield all([...reposSagas]);
}
