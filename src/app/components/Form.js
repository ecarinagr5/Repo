import React, { Component } from 'react';
import arrow from '../content/img/arrowdown.png';
import $ from 'jquery';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({value: this.state.value + 1}, () => {
      if (this.state.value % 2 !== 0) {
        var topFooter = $('#footer-container').height();
        $('#logo-footer').css('bottom', topFooter);
        $('#footer-container').fadeToggle("fast");
        } else {
        $('#logo-footer').css('bottom', '0');
        $('#footer-container').hide();
    }
    });
}


  render() {
    console.log("heigth", )
    let ubicacion = ['PEUGEOT AGUASCALIENTES', 'PEUGEOT CHIHUAHUA', 'PEUGEOT TORREÓN',
  'PEUGEOT SALTILLO','PEUGEOT DF UNIVERSIDAD','PEUGEOT DF VALLEJO','PEUGEOT DF ANZURES','PEUGEOT DF LOMAS VERDES',
  'PEUGEOT DF LOMAS VERDES','PEUGEOT DF ARBOLEDAS','PEUGEOT PACHUCA','PEUGEOT GUADALAJARA AVILA CAMACHO',
  'PEUGEOT GUADALAJARA LÓPEZ MATEOS','PEUGEOT MORELIA','PEUGEOT MONTERREY GONZALITOS','PEUGEOT MONTERREY TEC',
  'PEUGEOT OAXACA','PEUGEOT QUERÉTARO','PEUGEOT CANCÚN','PEUGEOT SAN LUIS POTOSÍ LOMAS','PEUGEOT SAN LUIS POTOSÍ GLORIETA',
  'PEUGEOT HERMOSILLO','PEUGEOT XALAPA','PEUGEOT MÉRIDA','PEUGEOT DF MIRAMONTES','PEUGEOT VERACRUZ','PEUGEOT VILLAHERMOSA',
  'PEUGEOT TUXTLA GUTIERREZ','PEUGEOT DURANGO','PEUGEOT CUERNAVACA','PEUGEOT COLIMA','PEUGEOT LEÓN','PEUGEOT CULIACÁN',
  'PEUGEOT MONTERREY SAN NICOLAS', 'PEUGEOT MEXICALI','PEUGEOT GUADALAJARA ACUEDUCTO','PEUGEOT DF INTERLOMAS','PEUGEOT CAMPECHE',
  'PEUGEOT PUEBLA','PEUGEOT PUERTO VALLARTA','PEUGEOT TIJUANA','PEUGEOT TOLUCA','PEUGEOT STELLA XALAPA','PEUGEOT TAMPICO'];
    let sucursales = ubicacion.map(function (name) {
    return  <option value={ name }>{ name }</option>;
    });
    return (
          <div>
            <div id="logo-footer" onClick={ this.handleClick }>
              <span>¡VIVE LA EXPERIENCIA!</span>
              <br />
              <img src={arrow} alt="arrow"/>
          </div>
          <div id="footer-container" ref="footer-container">
            <div className="col-6 content-form sideleft">
                <p className="campolado"><label>Nombre(s) </label><br/><input type="text" name="fname" placeholder="Nombre"/></p>
                <p className="campolado"><label>Apellido</label><br/><input type="text" name="fapellido" placeholder="Apellido"/></p>
                <p className="campo"><label>Teléfono</label><br/><input type="text" placeholder="(000) 000000-0000" name="ftelefono"/></p>
                <p className="campo"><label>Correo electrónico</label><br/><input type="text" placeholder="correo@mail.com" name="fcorreo"/></p>
            </div>
            <div className="col-6 content-form sideright">
                <p className="campoladob"><label>Modelo </label></p>
                    <p className="radioBtn"><input type="radio" name="modelo" value="208"/><label >208</label></p>
                    <p className="radioBtn"><input type="radio" name="modelo" value="301"/><label >301</label></p>
                    <p className="campoladoc">Consecionario<br/>
                    <select>
                           {sucursales}
                    </select>
                </p>
                <p className="privacidad"><input type="checkbox" name="privacidad" value="acepto" checked />
                    <label><br/>Acepto las politicas de privacidad</label></p>
            </div>
            <div id="btn-form">
                    <a href="#prueba" className="btn-pruebamanejo">¡QUIERO MI PRUEBA DE MANEJO!</a>
            </div>
            <div id="btn-link">
                    <a href="#prueba" className="btn-cotiza">Quiero una cotización</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Form;