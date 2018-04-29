import React, { Component } from 'react';
import BtnCar208 from '../components/BtnCar208';
import BtnCar301 from '../components/BtnCar301';
import Menu from '../components/Menu';
import Iconoption from '../components/Iconoption';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Car208 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title208 : '../app/content/img/titleMAX208.png',
            minititle :'../app/content/img/minititle208.png',
            Car208:
            ['../app/content/img/pegout208car.png',
            '../app/content/img/pegout208car.png',
            '../app/content/img/pegout208car.png',
            '../app/content/img/pegout208car.png'
            ]
       };
      }
    
   render() { 
       console.log("this", this)  
      return (
        <div id="body-container">
            <div className="maxWidthAvailable">
                <div id="car208" className="car-container pullDown">
                    <img className="titleMax208 fadeIn" src={ this.state.title208 } alt="Peogeut 208" />
                    <img className="minititle" src={ this.state.minititle } alt="Peogeut 208" />
                    <img id="car-uno" className="carImage slideCar" src={ this.state.Car208[0]}  alt="Peogeut 208" />
                    <img id="car-dos" className="carImage slideCar" src={ this.state.Car208[1]} alt="Peogeut 208" />
                    <img id="car-tres" className="carImage slideCar" src={ this.state.Car208[2]} alt="Peogeut 208" />
                    <img id="car-cuatro" className="carImage slideCar" src={ this.state.Car208[3]} alt="Peogeut 208" />
                    <Menu />
                    <Iconoption />
                </div>
            </div>
            <BtnCar301 />
        </div>
      );
   }
}
export default Car208;