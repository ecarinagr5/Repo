import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.path = window.location.origin;
    }

    tipoMenu() {       
        const rutaBase = ''; /*Para prod debe ir / */ 
        if (window.location.href === this.path +  '/Peugeot208' || window.location.href === this.path +  '/Peugeot-Exterior-208'
        || window.location.href === this.path +  '/Peugeot-Interior-208'       || window.location.href === this.path +  '/Peugeot-Seguridad-208' 
        || window.location.href === this.path +  '/Peugeot-Cumple') {
        return (
            <div>
            <ul id="optionsmenu">
             <Link to={"/Peugeot208"}>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot208' ? 'active' : ''}`} href=""> PEUGEOT 208</a><p></p>
                </li>
            </Link>
            <Link to={ rutaBase + "/Peugeot-Exterior-208" }>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Exterior-208' ? 'active' : ''}`} href=""> EXTERIOR</a><p></p>
                </li>
            </Link>
            <Link to={ rutaBase + "/Peugeot-Interior-208" }>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Interior-208' ? 'active' : ''}`} href=""> INTERIOR</a><p></p>
                </li>
            </Link>
            <Link to= {rutaBase + "/Peugeot-Seguridad-208" }>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Seguridad-208' ? 'active' : ''}`} href=""> SEGURIDAD</a><p></p>
                </li>
            </Link>
            <Link to="/Peugeot-Cumple">
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Cumple' ? 'active' : ''}`} href=""> PEUGEOT CUMPLE</a><p></p>
                </li>
            </Link>
            </ul>
            </div>
        );
    } else {
        return (
            <div>
            <ul id="optionsmenu">
             <Link to={"/Peugeot301"}>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot301' ? 'active' : ''}`} href=""> PEUGEOT 301</a><p></p>
                </li>
            </Link>
            <Link to={ rutaBase + "/Peugeot-Exterior-301" }>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Exterior-301' ? 'active' : ''}`} href=""> EXTERIOR</a><p></p>
                </li>
            </Link>
            <Link to={ rutaBase + "/Peugeot-Interior-301" }>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Interior-301' ? 'active' : ''}`} href=""> INTERIOR</a><p></p>
                </li>
            </Link>
            <Link to= {rutaBase + "/Peugeot-Seguridad-301" }>
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Seguridad-301' ? 'active' : ''}`} href=""> SEGURIDAD</a><p></p>
                </li>
            </Link>
            <Link to="/Peugeot-Cumple-301">
                <li className="btn">
                    <a className={`${ window.location.href === this.path +  '/Peugeot-Cumple-301' ? 'active' : ''}`} href=""> PEUGEOT CUMPLE</a><p></p>
                </li>
            </Link>
            </ul>
            </div>
        );
    }
}

  render() { 
    return (
        <div id="menu" className={`${window.location.href === this.path +  '/Peugeot208' || window.location.href === this.path +  '/Peugeot-Exterior-208'
        || window.location.href === this.path +  '/Peugeot-Interior-208'       || window.location.href === this.path +  '/Peugeot-Seguridad-208' 
        || window.location.href === this.path +  '/Peugeot-Cumple' ? 'container-menu' : 'container-menu301'}`}>
            {this.tipoMenu()}
        </div>
    );
  }
}

export default Menu;