import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
             exteriorTitle :'../app/content/img/exteriorTitleb.png',
             exteriorMinititle :'../app/content/img/exteriorMinititle.png',
             exteriorMinititle301 :'../app/content/img/title301Peugeot.png',
             nolopagas: '../app/content/img/nolopagas.png'
        };
      }
    
    content() {
        let path = window.location.origin;
        const rutaBase = '/'; /*Para prod debe ir / */  
        if( window.location.href === path +  '/Peugeot-Exterior-208' ) {
            return(
                <div>
                    <img className="mini-titleExterior" src={ rutaBase + this.state.exteriorMinititle } alt="Peugeot 208"/>
                    <img src={ rutaBase + this.state.exteriorTitle } alt="Peugeot 208"/>
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
                <div className="title-seguridad fadeIn">
                    <h2>SEGURIDAD</h2>
                    <p>* Cruise Control <br />
                        * Programa Dinámico de Estabilidad (ESP) <br />
                        * Bolsas de aire <br />
                        * Estructura de carrocería ultra-ligera</p>
                </div>
            );
        } else if ( window.location.href === path + '/Peugeot-Cumple' ) {
            return(
                <div className="cumple-description fadeIn">
                    <p>En Peugeot estamos seguros de la atención y 
                        profesionalismo del servicio post-venta que ofrecemos a 
                        nuestros clientes, por eso:</p>
                        <img src={ this.state.nolopagas } alt="Peugeot Cumple"/>
                        <p>El presente beneficio aplica únicamente a la bonificación del costo de mano de obra presupuestado 
                            al momento de ingresar el vehículo para la realización del servicio, no aplica para trabajos 
                            realizados por hojalatería y pintura. Para acceder a este beneficio deberá estar al corriente 
                            con sus servicios de mantenimiento, tanto en tiempo como en forma, y cuenta con 24 horas desde el 
                            momento en que retira el 
                            vehículo del distribuidor para realizar la reclamación por medio de gerente de servicio.</p>
                </div>
            );
        }  else if ( window.location.href === path + '/Peugeot-Exterior-301' ) {
            return(
                <div className="exterior-content301">
                    <img className="mini-titleExterior301" src={ rutaBase + this.state.exteriorMinititle301 } alt="Peugeot 301"/>
                    <img src={ rutaBase + this.state.exteriorTitle } alt="Peugeot 301"/>
                    <p>
                        El nuevo PEUGEOT 301, adopta los últimos códigos estilísticos de la marca. 
                        Con un aspecto robusto y muy moderno, el nuevo sedán PEUGEOT 301 posee una parrilla vertical, 
                        faros integrados en la carrocería y detalles muy cuidados. La firma luminosa 
                        de sus LED delanteros disponibles en la versión Allure; y el efecto de garras 
                        en la parte trasera son detalles de su personalidad tecnológica.
                    </p>
                </div>
            );
        } else if ( window.location.href === path + '/Peugeot-Cumple-301' ) {
            return(
                <div className="cumple-description fadeIn">
                    <p>En Peugeot estamos seguros de la atención y 
                        profesionalismo del servicio post-venta que ofrecemos a 
                        nuestros clientes, por eso:</p>
                        <img src={ this.state.nolopagas } alt="Peugeot Cumple"/>
                        <p>El presente beneficio aplica únicamente a la bonificación del costo de mano de obra presupuestado 
                            al momento de ingresar el vehículo para la realización del servicio, no aplica para trabajos 
                            realizados por hojalatería y pintura. Para acceder a este beneficio deberá estar al corriente 
                            con sus servicios de mantenimiento, tanto en tiempo como en forma, y cuenta con 24 horas desde el 
                            momento en que retira el 
                            vehículo del distribuidor para realizar la reclamación por medio de gerente de servicio.</p>
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