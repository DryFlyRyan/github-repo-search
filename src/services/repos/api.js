import qs from 'qs';
import rootApi from '../root/rootApi';

class ReposApi {
  constructor(api) {
    this.api = api;
  }
  fetchRepos = params => {
    console.log('params?', params)
    const filteredParams = Object.keys(params).reduce((accum, param) => {
      if (params[param]) {
        return {
          ...accum,
          [param]: params[param]
        };
      }
      return { ...accum };
    }, {});
    console.log('filtered', filteredParams)
    const stringifiedQueryParams = qs.stringify(filteredParams);


    console.log('stringified', stringifiedQueryParams);

    return this.api
    .get(`http://localhost:3000/repos?${stringifiedQueryParams}`, {
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json());
  }
}

export default new ReposApi(rootApi);
