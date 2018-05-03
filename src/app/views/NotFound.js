import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class NotFound extends Component {
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
           <h2>Error 404!</h2>
           <p>Regresar al HOME</p>
           
        </div>  
        </div>      
  </div>
    );
  }
}

export default NotFound;