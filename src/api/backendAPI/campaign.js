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

class CampaignAPI {
  static fetchCampaign() {
    return fetch(`${MassAppealAPIDomain}/api/campaign/:id`, {
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
        if (body.campaign) {
          return body.campaign;
        } else {
          throw new Error('Unable to fetch campaign');
        }
      });
  }

  static fetchCampaigns() {
    return fetch(`${MassAppealAPIDomain}/api/campaigns`, {
      method: 'GET',
      headers: acceptContentTypeHeadersV1,
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
        if (body.campaigns) {
          return body.campaigns;
        } else {
          throw new Error('Unable to fetch campaigns.');
        }
      });
  }

  static updateCampaign(campaign) {
    return fetch(`${MassAppealAPIDomain}/api/campaign/:id`, {
      method: 'PATCH',
      headers: authorizationHeadersV1(),
      body: JSON.stringify({ campaign }),
    })
      .then(response => {
        let { ok, status, statusText } = response;
        if (ok || status === 422) {
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
          throw new Error('Unable to update campaign');
        }
      });
  }

  static saveCampaign(data) {
    return fetch(`${MassAppealAPIDomain}/api/campaigns`, {
      method: 'POST',
      headers: authorizationHeadersV1(),
      body: data,
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
          throw new Error('Unable to save opportunity');
        }
      });
  }

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

  static deleteCampaign(data) {
    return fetch(`${MassAppealAPIDomain}/api/campaigns/${data.campaignId}`, {
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
          throw new Error('Unable to delete campaign');
        }
      });
  }
}
