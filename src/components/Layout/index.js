import React, { PropTypes } from 'react';
import DevTools from 'containers/DevTools';
import HeaderContainer from 'containers/HeaderContainer';
import { isDevelopment } from 'constants/values';
import './styles.scss';

const Layout = ({ children }) => (
  <div className="layout-container">
    <HeaderContainer />
    <div>
      {children}
    </div>
    {isDevelopment && <DevTools />}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
