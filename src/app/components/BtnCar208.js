import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class BtnCar208 extends Component {
    render() {
    const rutaBase = '/'; /*Para prod debe ir / */ 
        return (
            <Link to={ "/Peugeot208" }>
            <div id="btnCar" className="button-container">
                <div className="shadow-button"></div>
                <p className="parrafo-buttona">DESCUBRE</p>
                <p className="menu-parrafo"></p>
                <p className="parrafo-button">TU ENERGÍA</p>
            </div>
            </Link>
        );
    }
}

export default BtnCar208;