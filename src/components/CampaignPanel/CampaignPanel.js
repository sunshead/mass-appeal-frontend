import React, { Component, PropTypes } from 'react';
import './CampaignPanel.css';
import CampaignCard from '../CampaignCard/CampaignCard';

class CampaignPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let filteredCampaigns = this.props.campaigns.filter(
      campaign => campaign.name.indexOf(this.props.filterText) !== -1,
    );
    let campaignCards = filteredCampaigns.map(campaign => (
      <CampaignCard
        id={campaign.id}
        creator_id={campaign.creator_id}
        name={campaign.name}
        goal_amount_in_cents={campaign.goal_amount_in_cents}
        description={campaign.description}
        key={campaign.creator_id}
      />
    ));
    return (
      <div className="CampaignCard">
        {campaignCards}
      </div>
    );
  }
}

CampaignPanel.propTypes = {
  campaigns: PropTypes.arrayOf(PropTypes.object),
};

export default CampaignPanel;
