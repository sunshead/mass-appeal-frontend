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
      <div className="col s12">
        <div className="card horizontal">
          <div className="card-image campaign-image">
            <img
              src="https://s3.us-east-2.amazonaws.com/purple-server/users/default_profile_picture/default.png"
              alt="campaign"
            />
          </div>
          <div className="card-stacked">
            <div className="row">
              <div className="col s8">
                <div className="card-content">
                  <div className="campaign-title">
                    {this.props.name}
                  </div>
                  <div className="campaign-descritpion">
                    {this.props.description}
                  </div>
                  <p>{this.props.creator_id}</p>
                  <p>{this.props.goal_amount_in_cents}</p>
                </div>
              </div>
              <div className="col s4">
                <div className="card-action">
                  <a className="waves-effect waves-light btn campaign-btn">
                    Contribute
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
