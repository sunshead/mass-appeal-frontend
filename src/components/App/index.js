import React from 'react';
import { Route } from 'react-router-dom';
import Layout from 'components/Layout';
import HomeContainer from 'containers/HomeContainer';
import LogInContainer from 'containers/LogInContainer';
import AuthRoute from 'containers/AuthRoute';
import Private from 'components/Private';
import Campaign from 'components/Campaign/Campaign';

const App = () => (
  <Layout>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/campaign" component={Campaign} />
    <Route path="/login" component={LogInContainer} />
    <AuthRoute path="/private" component={Private} />
  </Layout>
);

export default App;
