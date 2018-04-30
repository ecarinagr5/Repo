import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Leyendas extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            flag:0
        }
    }

    handleClick (data) {
        if (data === 'show') { 
            this.setState({ flag:1});
        } else if (data === 'close') {
            this.setState({ flag:0});
        }
    }

    render() {
        const divStyle = {
            height:window.innerHeight,
            width:'90%',
            background: 'white',
            float:'left'
        };
    return (
        <div>
            <div id="divPopup" className={`popUp ${this.state.flag === 0 ? 'hideDiv': ''}`}>
                <div className="close-popup" onClick={() => this.handleClick('close')}>Cerrar</div>
                <div style = { divStyle }>

                </div>
            </div>;
            <div className="privacidad-note col-6" onClick={() => this.handleClick('show')}>
                <b>Aviso de Privacidad</b>
             </div>
            <div className="leyenda col-6">
                    * Precio sujeto a cambio sin previo aviso. 
                    Imágenes de carácter ilustrativo, consulta disponibilidad, 
                    precios y aplicación con tu distribuidor autorizado.
            </div>
        </div>
        );
    }
}

export default Leyendas;