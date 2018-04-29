import React, { Component } from 'react';
import BtnCar208 from '../components/BtnCar208';
import BtnCar301 from '../components/BtnCar301';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
             title208 : '../app/content/img/title208.png',
             title301 :'../app/content/img/title301.png',
             imgCar208:'../app/content/img/car208.png',
             imgCar301:'../app/content/img/car301.png',
        };
      }
    
   render() { 
    const sidea = {
        height:  screen.height,
      };      
      return (
        <div id="body-container">
        <div className="maxWidthAvailable">
            <div style = { sidea } className="col-6 sidea container-shadow"> 
                <img className="titleCars fadeIn" src={this.state.title208} alt="Peugout 208" />
                <Link to="/Peogeut208">
                    <img className="imgCar208 pullDown" src={this.state.imgCar208} alt="Peugout 208"/>
                </Link>
            <BtnCar208 />
            </div>
            <div style = { sidea } className="col-6 sideb container-shadowb">  
                <img className="titleCars fadeIn" src={this.state.title208} alt="Peugout 301" />
                <img  className="imgCar pullDown" src={this.state.imgCar301} alt="Peugout 301"/>
            <BtnCar301 />
            </div> 
        </div>        
    </div>
      );
   }
}
export default Home;