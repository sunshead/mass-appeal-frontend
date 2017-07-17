import React from 'react';
import { Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomeContainer from 'containers/HomeContainer';
import LogInContainer from 'containers/LogInContainer';
import AuthRoute from 'containers/AuthRoute';
import Private from 'components/Private';
import CampaignPanel from 'components/CampaignPanel/CampaignPanel';
import 'materialize-css/dist/css/materialize.css';

const App = () => (
  <Layout
    script={[
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.99.0/js/materialize.min.js',
        type: 'text/javascript',
      },
    ]}
  >
    <Route exact path="/" component={HomeContainer} />
    <Route path="/campaign-panel" component={CampaignPanel} />
    <Route path="/login" component={LogInContainer} />
    {/*<Route path="/new-campaign" component={NewCampaignContainer}/>*/}
    <AuthRoute path="/private" component={Private} />
  </Layout>
);

export default App;
