// import { bodyHeaders } from 'utilities/apiHeaders.js'
import { backendAPIUrl } from 'constants/values';

//TBD

let acceptContentTypeHeadersV1 = {
  Accept: '',
};

class UserAPI {
  static saveUser(data) {
    return fetch(`${backendAPIUrl}/api/users`, {
      method: 'POST',
    })
      .then(response => {
        let { ok, status, statusText } = response;
        if (ok) {
          return response.json();
        } else {
          let error = new Error(`${status} (${statusText})`);
          throw error;
        }
      })
      .then(body => {
        if (body) {
          return body;
        } else {
          throw new Error('Unable to save user');
        }
      });
  }
}
export default UserAPI;
