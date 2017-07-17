import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = ({ currentUser, onLogOutClick }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">Mass Appeal</Link>
        <Link to="/campaigns" className="navbar-brand navbar-campaigns">
          Campaigns
        </Link>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <div className="nav navbar-nav navbar-right">
          {currentUser
            ? <div>
                <a className="navbar-username">{currentUser.email}</a>
              </div>
            : <Link to="/login">Log In</Link>}
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
