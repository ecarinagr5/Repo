import React, { Component } from 'react';

class IconOption extends Component {
  render() {
    return (
        <div>
        <div id="optionsIcons" className="container-buttons-options">
                    <div className="ico" onclick="clickItems(1)">
                        <img className="titleMax208" src="Content/images/precioIcono.png" alt=""/>
                    </div>
                    <div className="ico" onclick="clickItems(2)">
                        <img className="titleMax208" src="Content/images/accesoriosIcono.png" alt=""/>
                    </div>
                    <div className="ico" onclick="clickItems(3)">
                        <img className="titleMax208" src="Content/images/gamaIcono.png" alt=""/>
                    </div>
                    <div>
                        <img className="dieselImg" src="Content/images/diesel.png" alt=""/>
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
                        <img src="Content/images/rin-titanenegros.png" alt=""/>
                        <span>
                            <h3>Rin Titan Negros</h3>
                            <br />
                            Con engravado en láser
                            Rin de aleación 16"
                        </span>
                    </div>
                    <div className="container-items">
                            <img src="Content/images/yellowlime-detail.png" alt=""/>
                            <span><b>Yellow Lime</b></span>
                    </div>
                    <div className="container-items">
                            <img src="Content/images/menthol-detail.png" alt="" />
                            <span><b>Menthol</b></span>
                    </div>
                </div>
                <div id="info-tres" className="icons-content slideRight">
                        <img src="Content/images/pegout208car.png" onClick="changeCar(1)" alt="" />
                        <img src="Content/images/pegout208car.png" onClick="changeCar(2)" alt="" />
                        <img src="Content/images/pegout208car.png" onClick="changeCar(3)" alt="" />
                        <img src="Content/images/pegout208car.png" onclick="changeCar(4)" alt="" />
                </div>
            </div>
        </div>
    );
  }
}

export default IconOption;