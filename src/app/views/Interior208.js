import React, { Component } from 'react';
import BtnCar208 from '../components/BtnCar208';
import BtnCar301 from '../components/BtnCar301';
import Menu from '../components/Menu';
import Leyendas from '../components/Leyendas';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Description from '../components/description';

class Interior208 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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


   render() { 
      return (
        <div id="body-container">
            <div className="maxWidthAvailable">
                <div id="car208" className="interior-container pullDown">
                <Description />
                <div className="video-background">
                    <div className="video-foreground">
                      <iframe src="https://www.youtube.com/embed/ujq2FQ_6Ilo?controls=1&showinfo=0&rel=0&autoplay=0&loop=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
                    </div>
                </div>               
                    <Menu />
                <div id="optionsIcons" className="container-buttons-options">
                    <div className="ico" onClick={() => this.handleClick('icon', 1)}>
                        <img src={ this.state.icons[0] } alt="Peugeot 208"/>
                    </div>
                    <div className="ico" onClick={() => this.handleClick('icon', 2)} >
                        <img src={ this.state.icons[1] } alt="Peugeot 208"/>
                    </div>
                    <div className="ico" onClick={() => this.handleClick('icon', 3)}>
                        <img src={ this.state.icons[2] } alt="Peugeot 208"/>
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
                           <Link to="/Peugeot208"> <img src={ this.state.colorcar[0] } alt="Peugeot 208" /></Link>
                           <Link to="/Peugeot208"><img src={ this.state.colorcar[1] } alt="Peugeot 208" /></Link>
                           <Link to="/Peugeot208"><img src={ this.state.colorcar[2] } alt="Peugeot 208" /></Link>
                           <Link to="/Peugeot208"><img src={ this.state.colorcar[3] } alt="Peugeot 208" /></Link>
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
export default Interior208;