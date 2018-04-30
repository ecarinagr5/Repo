import React, { Component } from 'react';
import BtnCar208 from '../components/BtnCar208';
import BtnCar301 from '../components/BtnCar301';
import Menu from '../components/Menu';
import Leyendas from '../components/Leyendas';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Car208 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title208 : '../app/content/img/titleMAX208.png',
            minititle :'../app/content/img/minititle208.png',
            Car208:
            [
                '../app/content/img/208gris.png',
                '../app/content/img/208orange.png',
                '../app/content/img/208blanco.png',
                '../app/content/img/208rojo.png'
            ],
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
                '../app/content/img/208gris-s.png',
                '../app/content/img/208orange-s.png',
                '../app/content/img/208blanco-s.png',
                '../app/content/img/208rojo-s.png'
            ]
       };
       this.handleClick = this.handleClick.bind(this);
       this.handleCar = this.handleCar.bind(this);
      }
      
    handleClick (origen, val) {
        if (origen === 'icon' && val === 1) {
            document.getElementById("info-uno").style.display = "block";
            document.getElementById("info-dos").style.display = "none";
            document.getElementById("info-tres").style.display = "none";
        } else if (origen === 'icon' && val === 2) {
            document.getElementById("info-dos").style.display = "block";
            document.getElementById("info-uno").style.display = "none";
            document.getElementById("info-tres").style.display = "none";
        } else if (origen === 'icon' && val === 3) {
            document.getElementById("info-tres").style.display = "block";
            document.getElementById("info-dos").style.display = "none";
            document.getElementById("info-uno").style.display = "none";          
        }  
    }

    handleCar (car) {
        switch( car ) {
            case 0:
                document.getElementById("car-uno").style.display = "block";
                document.getElementById("car-dos").style.display = "none"; 
                document.getElementById("car-tres").style.display = "none";
                document.getElementById("car-cuatro").style.display = "none";               
            break;
            case 1:
                document.getElementById("car-uno").style.display = "none";
                document.getElementById("car-dos").style.display = "block"; 
                document.getElementById("car-tres").style.display = "none";
                document.getElementById("car-cuatro").style.display = "none"; 
            break;
            case 2:
                document.getElementById("car-uno").style.display = "none";
                document.getElementById("car-dos").style.display = "none"; 
                document.getElementById("car-tres").style.display = "block";
                document.getElementById("car-cuatro").style.display = "none"; 
            break;
            case 3:
                document.getElementById("car-uno").style.display = "none";
                document.getElementById("car-dos").style.display = "none"; 
                document.getElementById("car-tres").style.display = "none";
                document.getElementById("car-cuatro").style.display = "block"; 
             break;
            default:
            document.getElementById("car-uno").style.display = "block";
        }
    }

   render() { 
    const rutaBase = '/'; /*Para prod debe ir / */ 
      return (
        <div id="body-container">
            <div className="maxWidthAvailable">
                <div id="car208" className="car-container pullDown">
                    <img className="titleMax208 fadeIn" src={ rutaBase + this.state.title208 } alt="Peogeut 208" />
                    <img className="minititle" src={ rutaBase + this.state.minititle } alt="Peogeut 208" />
                    <img id="car-uno" className="carImage slideCar" src={ rutaBase + this.state.Car208[0]}  alt="Peogeut 208" />
                    <img id="car-dos" className="carImage slideCar" src={ rutaBase + this.state.Car208[1]} alt="Peogeut 208" />
                    <img id="car-tres" className="carImage slideCar" src={ rutaBase + this.state.Car208[2]} alt="Peogeut 208" />
                    <img id="car-cuatro" className="carImage slideCar" src={ rutaBase + this.state.Car208[3]} alt="Peogeut 208" />
                    <Menu />
                <div id="optionsIcons" className="container-buttons-options">
                    <div className="ico" onClick={() => this.handleClick('icon', 1)}>
                        <img src={ rutaBase + this.state.icons[0] } alt="Peugeot 208"/>
                    </div>
                    <div className="ico" onClick={() => this.handleClick('icon', 2)} >
                        <img src={ rutaBase + this.state.icons[1] } alt="Peugeot 208"/>
                    </div>
                    <div className="ico" onClick={() => this.handleClick('icon', 3)}>
                        <img src={ rutaBase + this.state.icons[2] } alt="Peugeot 208"/>
                    </div>
                    <div>
                        <img className="dieselImg" src={ rutaBase + this.state.icons[3] } alt="Peugeot 208" />
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
                            <img src={ rutaBase + this.state.accesorios[0] } alt="Peugeot 208" />
                            <span>
                                <h3>Rin Titan Negros</h3>
                                <br />
                                Con engravado en láser
                                Rin de aleación 16"
                            </span>
                        </div>
                        <div className="container-items">
                                <img src={ rutaBase + this.state.accesorios[1] } alt="Peugeot 208" />
                                <span><b>Yellow Lime</b></span>
                        </div>
                        <div className="container-items">
                                <img src={ rutaBase + this.state.accesorios[2] } alt="Peugeot 208" />
                                <span><b>Menthol</b></span>
                        </div>
                    </div>
                    <div id="info-tres" className="icons-content slideRight">
                            <img src={ rutaBase + this.state.colorcar[0] } onClick={() => this.handleCar(0) } alt="Peugeot 208" />
                            <img src={ rutaBase + this.state.colorcar[1] } onClick={() => this.handleCar(1)} alt="Peugeot 208" />
                            <img src={ rutaBase + this.state.colorcar[2] } onClick={() => this.handleCar(2)}alt="Peugeot 208" />
                            <img src={ rutaBase + this.state.colorcar[3] } onClick={() => this.handleCar(3)} alt="Peugeot 208" />
                    </div>
                    </div>
                    </div>
                </div>
            <BtnCar301 />
            <Leyendas />
        </div>
      );
   }
}
export default Car208;