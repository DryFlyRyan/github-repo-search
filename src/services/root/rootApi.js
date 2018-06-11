// Even though this kind of classing can be overkill for small applications
// like this, I typically use this structure because of how extensible it is,
// especially if I need to make header changes later on

class Api {
  static request(url, options) {
    return fetch(url, options);
  }
  static get(url, options) {
    return this.request(url, {
      method: 'GET',
      ...options
    });
  }
}

export default Api;
