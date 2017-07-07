import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { currentUser } from 'utilities/selectors';
import CampaignPanel from '../components/CampaignPanel/CampaignPanel';
import SearchBar from '../components/SearchBar/SearchBar';

let campaigns = [
  {
    creator_id: '123',
    name: 'little a',
    goal_amount_in_cents: 2000,
    description: 'awesome',
  },
  {
    creator_id: '234',
    name: 'little b',
    goal_amount_in_cents: 3000,
    description: 'awesome',
  },
  {
    creator_id: '345',
    name: 'little c',
    goal_amount_in_cents: 4000,
    description: 'awesome',
  },
  {
    creator_id: '456',
    name: 'little d',
    goal_amount_in_cents: 5000,
    description: 'awesome',
  },
];

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
    };
  }

  handleUserInput(searchTerm) {
    this.setState({ filterText: searchTerm });
  }

  render() {
    return (
      <div>
        <h1>Home Container Component</h1>
        {this.props.currentUser &&
          <span>Sign in as: {this.props.currentUser.email}</span>}
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <CampaignPanel
          campaigns={campaigns}
          filterText={this.state.filterText}
        />
      </div>
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
