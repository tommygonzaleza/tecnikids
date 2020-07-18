import React from 'react';
import roboteando from '../../img/roboteando.png';
import photon from '../../img/aliados/logo-photon-1.jpg';
import autostem from '../../img/logo-autostem.png';
import aerostem from '../../img/logo-aerostem.png';
import tomi from '../../img/aliados/logo-tomi.png';
import python from '../../img/logo-python.png';
import bucky from '../../img/bucky.webp';
import arduino from '../../img/logo-arduino.png';
import f1 from '../../img/logo-f1.jpg';

export const ProgramsSection = () => {
    return(
        <div className="col-11 programs-center mb-5 mt-1 p-0">
            <a className="col-12 col-md-2 px-0" href="/roboteando-view"><img className="col-2" src={roboteando} alt="Roboteando" /></a>
            <a className="col-12 col-md-2 px-0" href="/photon-view"><img className="col-2" src={photon} alt="Photon" /></a>
            <a className="col-12 col-md-2 px-0" href="/autostem-view"><img className="col-2" src={autostem} alt="Autostem" /></a>
            <a className="col-12 col-md-2 px-0" href="/aerostem-view"><img className="col-3" src={aerostem} alt="Aerostem" /></a>
            <a className="col-12 col-md-2 px-0" href="/tomi-view"><img className="col-2" src={tomi} alt="Tomi" /></a>
            <br />
            <a className="col-12 col-md-2 px-0" href="/roboteando-view"><img className="col-2" src={roboteando} alt="Ponte En Línea" /></a>
            <img className="col-12 col-md-2 mx-3" src={python} alt="Python" />
            <a className="col-12 col-md-2 px-0" href="/bucky-view"><img className="col-2" src={bucky} alt="Bucky" /></a>
            <a className="col-12 col-md-2 px-0" href="/arduino-view"><img className="col-2 mx-5" src={arduino} alt="Arduino" /></a>
            <a className="col-12 col-md-2 px-0" href="/f1-view"><img className="col-2" src={f1} alt="F1" /></a>
        </div>
    )
}