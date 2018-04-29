import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const logo = '../app/content/img/logo.png';
    return (
      <div>
        <Link to="/">
        <header id="header-container" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        </Link>
      </div>
    );
  }
}

export default Header;