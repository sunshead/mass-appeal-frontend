import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { currentUser } from 'utilities/selectors';
import CampaignPanel from '../CampaignPanel/CampaignPanel';
import SearchBar from '../SearchBar/SearchBar';
import './Home.scss';

class Home extends Component {
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
      <div className="row">
        <div className="col s2" />
        <div className="col s8">
          <a
            className="waves-effect waves-light btn new-campaign-btn"
            onClick={this.props.addCampaign.bind(this)}
          >
            New Campaign
          </a>
          <SearchBar
            className="col s7"
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput.bind(this)}
          />
          <CampaignPanel
            campaigns={this.props.campaigns}
            filterText={this.state.filterText}
          />
          <div className="col s2" />
        </div>
      </div>
    );
  }
}
Home.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  currentUser: currentUser(state),
});

export default connect(mapStateToProps)(Home);
