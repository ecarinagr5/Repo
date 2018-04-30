import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class BtnCar301 extends Component {
    render() {
        const rutaBase = '/'; /*Para prod debe ir / */ 
        return (
            <Link to={ "/Peugeot301" }>
            <div id="btnCar" className="button-containerb">
                <div className="shadow-button"></div>
                <p className="parrafo-buttona">DESCUBRE</p>
                <p className="menu-parrafo"></p>
                <p className="parrafo-button">TU COMODIDAD</p>
            </div>
            </Link>
        );
    }
}

export default BtnCar301;