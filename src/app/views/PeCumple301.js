import React, { Component } from 'react';
import BtnCar208 from '../components/BtnCar208';
import BtnCar301 from '../components/BtnCar301';
import Menu from '../components/Menu';
import Leyendas from '../components/Leyendas';
import Description from '../components/description';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PeCumple301 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title301 : '../app/content/img/peugeot301.png',
            minititle :'../app/content/img/minititle301.png',
            Car301:
            [
                '../app/content/img/301grisartense.png',
                '../app/content/img/301grisshark.png',
                '../app/content/img/301blanco.png',
                '../app/content/img/301negro.png'
            ],
            icons:
            [
                '../app/content/img/ico-precio.png',
                '../app/content/img/ico-personalizacion.png',
                '../app/content/img/ico-colores.png',
                '../app/content/img/rendimiento-301.png'
            ],
            accesorios:
            [
                '../app/content/img/rin-titanenegros.png',
                '../app/content/img/yellowlime-detail.png',
                '../app/content/img/menthol-detail.png'
            ],
            colorcar:
            [
                '../app/content/img/301color-grisartense.png',
                '../app/content/img/301color-grisshark.png',
                '../app/content/img/301color-blanco.png',
                '../app/content/img/301color-negro.png'
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
        <div id="body-container" className="background301 pullDown">
            <div className="maxWidthAvailable">
                <div id="car208" className="exterior208-container pullDown">
                    <h2 className="titleCumple slideUp">PEUGEOT CUMPLE</h2>
                    <iframe className="videoCumple" src="https://www.youtube.com/embed/ujq2FQ_6Ilo?controls=1&showinfo=0&rel=0&autoplay=0&loop=1" frameborder="0" allow="autoplay; encrypted-media" />
                    <Description />
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
                        <img className="dieselImg301" src={ rutaBase + this.state.icons[3] } alt="Peugeot 208" />
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
                            <img src={ rutaBase + this.state.accesorios[0] } alt="Peugeot 301" />
                            <span>
                                <h3>Rin Titan Negros</h3>
                                <br />
                                Con engravado en láser
                                Rin de aleación 16"
                            </span>
                        </div>
                        <div className="container-items">
                                <img src={ rutaBase + this.state.accesorios[1] } alt="Peugeot 301" />
                                <span><b>Yellow Lime</b></span>
                        </div>
                        <div className="container-items">
                                <img src={ rutaBase + this.state.accesorios[2] } alt="Peugeot 301" />
                                <span><b>Menthol</b></span>
                        </div>
                    </div>
                    <div id="info-tres" className="icons-content slideRight">
                            <img src={ rutaBase + this.state.colorcar[0] } onClick={() => this.handleCar(2) } alt="Peugeot 301" />
                            <img src={ rutaBase + this.state.colorcar[1] } onClick={() => this.handleCar(1)} alt="Peugeot 301" />
                            <img src={ rutaBase + this.state.colorcar[2] } onClick={() => this.handleCar(0)}alt="Peugeot 301" />
                            <img src={ rutaBase + this.state.colorcar[3] } onClick={() => this.handleCar(3)} alt="Peugeot 301" />
                    </div>
                    </div>
                    </div>
                </div>
            <BtnCar208 />
            <Leyendas />
        </div>
      );
   }
}
export default PeCumple301;