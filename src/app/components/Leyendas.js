import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Leyendas extends Component {
    render() {
        return (
        <div>
            <div className="privacidad col-6">
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