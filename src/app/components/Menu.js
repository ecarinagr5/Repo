import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
        <div id="menu" className="container-menu">
            <ul id="optionsmenu">
                <li className="btn"><a className="active" href="">PEUGEOT 208</a><p></p></li>
                <li className="btn"><a href="">EXTERIOR</a><p></p></li>
                <li className="btn"><a href="">INTERIOR</a><p></p></li>
                <li className="btn"><a href="">SEGURIDAD</a><p></p></li>
                <li className="btn"><a href="">PEUGEOT CUMPLE</a><p></p></li>
            </ul>
        </div>
    );
  }
}

export default Menu;