import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { currentUser } from 'utilities/selectors';
import Home from '../components/Home/Home';
import update from 'react-addons-update';
require('dotenv').config();

// const {REACT_APP_DOMAIN_URL} = process.env;
const REACT_APP_DOMAIN_URL = 'http://localhost:3000';
console.log(process.env);

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      campaigns: [],
    };
    this.addCampaign = this.addCampaign.bind(this);
  }

  addCampaign() {
    let newCampaign = {
      id: Date.now(),
      name: 'Coffee Machine',
      description: 'yoyo',
    };
    let nextState = update(this.state.campaigns, { $push: [newCampaign] });
    this.setState({ campaigns: nextState });
  }

  componentDidMount() {
    fetch(`${REACT_APP_DOMAIN_URL}/v1/campaigns`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ campaigns: responseData['campaigns'] });
      })
      .catch(error => {
        console.log(
          'Error fetching and parsing data from ' + REACT_APP_DOMAIN_URL,
          error,
        );
      });
  }

  render() {
    return (
      <Home campaigns={this.state.campaigns} addCampaign={this.addCampaign} />
    );
  }
}
HomeContainer.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  currentUser: currentUser(state),
});

export default connect(mapStateToProps)(HomeContainer);
