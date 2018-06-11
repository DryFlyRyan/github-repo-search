import {
  SEARCH_REPOS,
  SEARCH_REPOS_SUCCESSFUL,
  UPDATE_SORT
} from '../actionTypes';

const initialState = {
  items: [],
  totalCount: 0,
  params: {
    q: '',
    sort: ''
  }
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REPOS:
      return {
        ...state,
        params: {
          ...state.params,
          q: action.payload.q
        }
      };
    case SEARCH_REPOS_SUCCESSFUL:
      return {
        ...state,
        totalCount: action.payload.total_count,
        items: action.payload.items
      };
    case UPDATE_SORT:
      return {
        ...state,
        params: {
          ...state.params,
          sort: action.payload
        }
      };
    default:
      return state;
  }
};

export default repos;
