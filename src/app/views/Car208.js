import React, { Component } from 'react';
import BtnCar208 from '../components/BtnCar208';
import BtnCar301 from '../components/BtnCar301';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Car208 extends Component {
    constructor(props) {
        super(props);
      }
    
   render() {   
      return (
        <div id="body-container">
            <div className="maxWidthAvailable">
                <div id="car208" className="car-container pullDown">
                    <img className="titleMax208 fadeIn" src="Content/images/titleMAX208.png" alt="" />
                    <img class="minititle" src="Content/images/minititle208.png" alt="" />
                    <img id="car-uno" className="carImage slideCar" src="Content/images/pegout208car.png" alt="" />
                    <img id="car-dos" className="carImage slideCar" src="Content/images/menthol-detail.png" alt="" />
            {/* <!--Componente Menu-->*/}

            {/* <!--Componente Buttons Options-->*/}
                </div>
            </div>
            <BtnCar301 />
        </div>
      );
   }
}
export default Car208;