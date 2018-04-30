import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

class Menu extends Component {
  render() {
    let path = window.location.origin;
    return (
        <div id="menu" className="container-menu">
            <ul id="optionsmenu">
             <Link to="/Peogeut208">
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peogeut208' ? 'active' : ''}`} href=""> PEUGEOT 208</a><p></p>
                </li>
            </Link>
            <Link to="/Peogeut-Exterior-208">
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peogeut-Exterior-208' ? 'active' : ''}`} href=""> EXTERIOR</a><p></p>
                </li>
            </Link>
            <Link to="/Peogeut-Interior-208">
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peogeut-Interior-208' ? 'active' : ''}`} href=""> INTERIOR</a><p></p>
                </li>
            </Link>
            <Link to="">
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peogeut208' ? 'active' : ''}`} href=""> SEGURIDAD</a><p></p>
                </li>
            </Link>
            <Link to="">
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peogeut208' ? 'active' : ''}`} href=""> PEUGEOT CUMPLE</a><p></p>
                </li>
            </Link>
            </ul>
        </div>
    );
  }
}

export default Menu;