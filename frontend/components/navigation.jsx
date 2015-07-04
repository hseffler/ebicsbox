require("bootstrap-webpack");

import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">EBICS::Box</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#accounts">Accounts</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
