import React, { Component } from 'react';

class Header extends Component {
  render() {
    const logo = '../app/content/img/logo.png';
    return (
      <div>
        <header id="header-container" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;