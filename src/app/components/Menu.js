import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

class Menu extends Component {
  render() {
    let path = window.location.origin;
    const rutaBase = ''; /*Para prod debe ir / */  
    return (
        <div id="menu" className="container-menu">
            <ul id="optionsmenu">
             <Link to={"/Peugeot208"}>
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peugeot208' ? 'active' : ''}`} href=""> PEUGEOT 208</a><p></p>
                </li>
            </Link>
            <Link to={ rutaBase + "/Peugeot-Exterior-208" }>
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peugeot-Exterior-208' ? 'active' : ''}`} href=""> EXTERIOR</a><p></p>
                </li>
            </Link>
            <Link to={ rutaBase + "/Peugeot-Interior-208" }>
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peugeot-Interior-208' ? 'active' : ''}`} href=""> INTERIOR</a><p></p>
                </li>
            </Link>
            <Link to= {rutaBase + "/Peugeot-Seguridad-208" }>
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peugeot-Seguridad-208' ? 'active' : ''}`} href=""> SEGURIDAD</a><p></p>
                </li>
            </Link>
            <Link to="/Peugeot-Cumple">
                <li className="btn">
                    <a className={`${ window.location.href === path +  '/Peugeot-Cumple' ? 'active' : ''}`} href=""> PEUGEOT CUMPLE</a><p></p>
                </li>
            </Link>
            </ul>
        </div>
    );
  }
}

export default Menu;