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
            <h2 className="col-6">ALIADOS</h2>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={xyz_printing} alt="XYZ Printing" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={vex_robotics} alt="Vex Robotics" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={crobot} alt="C Robot" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={egb4} alt="EGB4 Technologies" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={abilix} alt="Abilix" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={cmu} alt="Carnegie Mellon University" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={roboteando} alt="Roboteando" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={nasa} alt="Nasa" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={photon} alt="Photon" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={aarobotec} alt="AAROBOTEC" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={arduino} alt="Arduino" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={dash_and_dot} alt="Dash And Dot" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={makeblock} alt="Makeblock" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={tomi} alt="Tomi" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={kpex} alt="Kpex" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
            <div className="row w-auto aliados-row">
                <div className="col-md-1"></div>
                <img src={parallax} alt="Parallax" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <img src={beebot} alt="Bee Bot" className="col-3 col-md-2 aliado-logo my-auto mx-2" />
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}