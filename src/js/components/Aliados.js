import React from 'react';

// First row w-auto aliados-row Images.
import xyz_printing from '../../img/aliados/logo-xyz-printing.png';
import vex_robotics from '../../img/aliados/logo-vex-robotics.png';
import crobot from '../../img/aliados/logo-crobot.jpg';
import egb4 from '../../img/aliados/logo-egb4.jpg';
import abilix from '../../img/aliados/logo-abilix.jpg';
import cmu from '../../img/aliados/logo-cmu.jpg';

// Second row w-auto aliados-row Images.
import roboteando from '../../img/aliados/logo-roboteando.png';
import nasa from '../../img/aliados/logo-nasa.png';
import photon from '../../img/aliados/logo-photon-1.jpg';
import aarobotec from '../../img/aliados/logo-aarobotec.png';
import arduino from '../../img/aliados/logo-arduino.png';
import dash_and_dot from '../../img/aliados/logo-dash-and-dot.png';

// Third row w-auto aliados-row Images.
import makeblock from '../../img/aliados/logo-makeblock.png';
import tomi from '../../img/aliados/logo-tomi.png';
import kpex from '../../img/aliados/logo-knex.jpg';
import parallax from '../../img/aliados/logo-parallax-outline.png';
import beebot from '../../img/aliados/logo-bee-bot.png';

export const Aliados = () => {
    return(
        <div className="container">
            <h2 className="col-6">Aliados</h2>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={xyz_printing} Alt="XYZ Printing" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={vex_robotics} Alt="Vex Robotics" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={crobot} Alt="C Robot" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={egb4} Alt="EGB4 Technologies" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={abilix} Alt="Abilix" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={cmu} Alt="Carnegie Mellon University" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={roboteando} Alt="Roboteando" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={nasa} Alt="Nasa" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={photon} Alt="Photon" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={aarobotec} Alt="AAROBOTEC" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={arduino} Alt="Arduino" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={dash_and_dot} Alt="Dash And Dot" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={makeblock} Alt="Makeblock" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={tomi} Alt="Tomi" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={kpex} Alt="Kpex" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={parallax} Alt="Parallax" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={beebot} Alt="Bee Bot" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}