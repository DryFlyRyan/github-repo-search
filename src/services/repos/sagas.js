import { takeLatest, put, select } from 'redux-saga/effects';
import { SEARCH_REPOS } from '../actionTypes';
import ReposApi from './api';
import { searchReposSuccessful, searchReposFailed } from './actions';

const searchReposSaga = function* searchReposSaga(action) {
  try {
    const params = yield select(state => state.repos.params);
    const response = yield ReposApi.fetchRepos(params);
    yield put(searchReposSuccessful(response));
  } catch (error) {
    yield put(searchReposFailed(error));
  }
};

export const reposSagas = [takeLatest(SEARCH_REPOS, searchReposSaga)];