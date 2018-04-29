import React, { Component } from 'react';

class Iconoption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons:
            [
                '../app/content/img/precioIcono.png',
                '../app/content/img/accesoriosIcono.png',
                '../app/content/img/gamaIcono.png',
                '../app/content/img/diesel.png'
            ],
            accesorios:
            [
                '../app/content/img/rin-titanenegros.png',
                '../app/content/img/yellowlime-detail.png',
                '../app/content/img/menthol-detail.png'
            ],
            colorcar:
            [
                '../app/content/img/pegout208car.png',
                '../app/content/img/pegout208car.png',
                '../app/content/img/pegout208car.png',
                '../app/content/img/pegout208car.png'
            ],
       };
       this.handleClick = this.handleClick.bind(this);
      }

  
      handleClick (val) {
        console.log("si", val)
    }

  render() {
    return (
        <div>
        <div id="optionsIcons" className="container-buttons-options">
                    <div className="ico" onClick={() => this.handleClick(1)}>
                        <img className="titleMax208" src={ this.state.icons[0] } alt="Peugeot 208"/>
                    </div>
                    <div className="ico" onClick={() => this.handleClick(2)} >
                        <img className="titleMax208" src={ this.state.icons[1] } alt="Peugeot 208"/>
                    </div>
                    <div className="ico" onClick={() => this.handleClick(3)}>
                        <img className="titleMax208" src={ this.state.icons[2] } alt="Peugeot 208"/>
                    </div>
                    <div>
                        <img className="dieselImg" src={ this.state.icons[3] } alt="Peugeot 208" />
                    </div>
            </div>
            <div id="iconsInfo" >
                <div id="info-uno" className="icons-content bigEntrance">
                    <p>A partir de</p>
                    <p>$469 900</p>
                    <p>*Impuestos incluidos</p>
                </div>
                <div id="info-dos" className="icons-content slideRight">
                    <div className="container-items">
                        <img src={ this.state.accesorios[0] } alt="Peugeot 208" />
                        <span>
                            <h3>Rin Titan Negros</h3>
                            <br />
                            Con engravado en láser
                            Rin de aleación 16"
                        </span>
                    </div>
                    <div className="container-items">
                            <img src={ this.state.accesorios[1] } alt="Peugeot 208" />
                            <span><b>Yellow Lime</b></span>
                    </div>
                    <div className="container-items">
                            <img src={ this.state.accesorios[2] } alt="Peugeot 208" />
                            <span><b>Menthol</b></span>
                    </div>
                </div>
                <div id="info-tres" className="icons-content slideRight">
                        <img src={ this.state.colorcar[0] } alt="Peugeot 208" />
                        <img src={ this.state.colorcar[1] } alt="Peugeot 208" />
                        <img src={ this.state.colorcar[2] } alt="Peugeot 208" />
                        <img src={ this.state.colorcar[3] } alt="Peugeot 208" />
                </div>
            </div>
        </div>
    );
  }
}

export default Iconoption;