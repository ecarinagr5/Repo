import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class LoadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
             energia :'../app/content/img/energia.png',
             comodidad :'../app/content/img/comodidad.png',
             num208:'../app/content/img/208.png',
             num301:'../app/content/img/301.png',
        };
      }
   render() { 
    const sidea = {
        height:  screen.height,
      }; 
    const rutaBase = ''; /*Para prod debe ir / */   
 
      return (
        <div id="body-container">
        <div className="maxWidthAvailable center">
            <div style = { sidea } className="col-6 sidea container-shadow slideRight"> 
                <img className="titleCarsSmall" src={rutaBase + this.state.energia} alt="Peugout 208" />
                <img className="numInicio fadeIn" src={rutaBase + this.state.num208} alt="Peugout 208"/>
            </div>
            <div className="hrLeft"></div>
            <div style = { sidea } className="col-6 sideb container-shadowb slideLeft">  
                <img className="titleCarsLoading" src={rutaBase + this.state.comodidad} alt="Peugout 301" />
                <img  className="numIniciob fadeIn" src={rutaBase + this.state.num301} alt="Peugout 301"/>
            </div> 
        </div>        
    </div>
      );
   }
}
export default LoadingPage;
