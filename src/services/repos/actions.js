import {
  SEARCH_REPOS,
  SEARCH_REPOS_FAILED,
  SEARCH_REPOS_SUCCESSFUL,
  UPDATE_SORT
} from '../actionTypes';

export const searchRepos = query => ({
  type: SEARCH_REPOS,
  payload: {
    q: query
  }
});

export const searchReposSuccessful = results => ({
  type: SEARCH_REPOS_SUCCESSFUL,
  payload: results
});

export const searchReposFailed = error => ({
  type: SEARCH_REPOS_FAILED,
  payload: error
});

export const updateSort = sort => {
  let sorter = sort;
  if (sort === 'relevance') {
    sorter = '';
  }
  return {
    type: UPDATE_SORT,
    payload: sorter
  };
};
