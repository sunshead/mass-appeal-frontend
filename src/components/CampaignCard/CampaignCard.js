import React, { Component, PropTypes } from 'react';
import './CampaignCard.css';

let namePropType = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`,
      );
    }
  }
};

class CampaignCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.creator_id}
        ,
        {' '}
        {this.props.name}
        ,
        {' '}
        {this.props.goal_amount_in_cents}
        ,
        {' '}
        {this.props.description}
      </div>
    );
  }
}

CampaignCard.propTypes = {
  creator_id: PropTypes.string,
  name: namePropType,
  goal_amount_in_cents: PropTypes.number,
  description: PropTypes.string,
};

export default CampaignCard;
