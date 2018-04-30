import React, { Component } from 'react';

class BtnCar301 extends Component {
    render() {
        const rutaBase = '/'; /*Para prod debe ir / */ 
        return (
            <div id="btnCar" className="button-containerb">
                <div className="shadow-button"></div>
                <p className="parrafo-buttona">DESCUBRE</p>
                <p className="menu-parrafo"></p>
                <p className="parrafo-button">TU COMODIDAD</p>
            </div>
        );
    }
}

export default BtnCar301;