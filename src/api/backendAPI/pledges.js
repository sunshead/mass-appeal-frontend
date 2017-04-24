// import { bodyHeaders } from 'utilities/apiHeaders.js'
// import { backendAPIUrl } from 'constants/values'

//TBD

let acceptContentTypeHeadersV1 = {
  Accept: '',
};

let authorizationHeadersV1 = () => {
  let authenticationToken = JSON.parse(
    localStorage.getItem('MassAppealAPI'),
  ).currentUser.authenticationToken;

  return Object.assign({}, acceptContentTypeHeadersV1, {
    Authorization: `Token token=${authenticationToken}`,
  });
};

class PledgeAPI {
  static savePledge(data) {
    return fetch(`${MassAppealAPIDomain}/api/pledges/${data.pledgeId}`, {
      method: 'POST',
      headers: authorizationHeadersV1(),
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
          throw new Error('Unable to save pledge');
        }
      });
  }

  static fetchPledgesByCampaign(data) {
    return fetch(
      `${MassAppealAPIDomain}/api/pledges?campaign_id=${data.campaignId}`,
      {
        method: 'GET',
        headers: authorizationHeadersV1(),
      },
    )
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
          throw new Error('Unable to get pledges for this campaign');
        }
      });
  }

  static fetchPledgesByUser(data) {
    return fetch(`${MassAppealAPIDomain}/api/pledges?user_id=${data.userId}`, {
      method: 'GET',
      headers: authorizationHeadersV1(),
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
          throw new Error('Unable to get pledges for this user');
        }
      });
  }

  static deletePledge(data) {
    return fetch(`${MassAppealAPIDomain}/api/pledges/${data.pledgeId}`, {
      method: 'DELETE',
      headers: authorizationHeadersV1(),
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
          throw new Error('Unable to delete pledge');
        }
      });
  }
}
