import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
             exteriorTitle :'../app/content/img/exteriorTitleb.png',
             exteriorMinititle :'../app/content/img/exteriorMinititle.png',
        };
      }

    render() {
        return (
                <div className="description-exterior">
                        <img className="mini-titleExterior" src={ this.state.exteriorMinititle } alt="Peugeot 208"/>
                        <img src={ this.state.exteriorTitle } alt="Peugeot 208"/>
                        <p>El Peogeut 208 GT es un concentrado de estilo y deportividad. 
                            Tanto por su línea como por el cuidado de cada detalle, este
                            deportivo despierta el mito GT de manera contemporánea.</p>
            </div>
        );
    }
}

export default Description;