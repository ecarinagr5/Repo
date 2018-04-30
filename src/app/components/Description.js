import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
             exteriorTitle :'../app/content/img/exteriorTitleb.png',
             exteriorMinititle :'../app/content/img/exteriorMinititle.png',
        };
      }
    
    content() {
        let path = window.location.origin;
        if( window.location.href === path +  '/Peugeot-Exterior-208' ) {
            return(
                <div>
                    <img className="mini-titleExterior" src={ this.state.exteriorMinititle } alt="Peugeot 208"/>
                    <img src={ this.state.exteriorTitle } alt="Peugeot 208"/>
                    <p>El Peogeut 208 GT es un concentrado de estilo y deportividad. 
                    Tanto por su línea como por el cuidado de cada detalle, este
                    deportivo despierta el mito GT de manera contemporánea.</p>
                </div>
            );
        } else if ( window.location.href === path + '/Peugeot-Interior-208' ) {
            return(
                <div className="title-video">
                    <h2>PEUGEOT I-COCKPIT®</h2>
                </div>
            );
        } else if ( window.location.href === path + '/Peugeot-Seguridad-208' ) {
            return(
                <div className="title-seguridad">
                    <h2>SEGURIDAD</h2>
                    <p>* Cruise Control <br />
                        * Programa Dinámico de Estabilidad (ESP) <br />
                        * Bolsas de aire <br />
                        * Estructura de carrocería ultra-ligera</p>
                </div>
            );
        }
    }
    

    render() {
        return (
                <div className="description-exterior">
                    {this.content()}
                 </div>
        );
    }
}

export default Description;