import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ThanksPage extends Component {
  render() { 
    const style = {
        background: '#cc2b00',
        height:window.innerHeight,
        width:'100%',
    }
    return (
      <div id="body-container" >
        <div className="maxWidthAvailable" style={style}>
          <div className="container-thanks">
          <h2> Tus datos se enviaron</h2>
          <p>¡Muy pronto te contactaremos para que comiences a vivir la experiencia Peugeot!</p>
          <p>Si no recibes nuestro correo de confirmación dentro de dos horas, por favor contáctnos aquí</p>

          <h2>Regresa a peugeot.com.mx</h2>

          <p>Siguenos en nuestras redes</p>
        </div>  
        </div>      
  </div>
    );
  }
}

export default ThanksPage;