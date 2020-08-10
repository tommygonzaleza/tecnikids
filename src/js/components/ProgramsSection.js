import React from 'react';
import roboteando from '../../img/roboteando.png';
import photon from '../../img/aliados/logo-photon-1.jpg';
import autostem from '../../img/logo-autostem.png';
import aerostem from '../../img/logo-aerostem.png';
import tomi from '../../img/aliados/logo-tomi.png';
import ponteEnLinea from '../../img/logo-ponte-en-linea.png';
import bucky from '../../img/logo-bucky.png';
import arduino from '../../img/logo-arduino.png';
import f1 from '../../img/logo-f1.jpg';

export const ProgramsSection = () => {
    return(
        <div className="col-11 p-center ml-0 ml-md-5 mb-5 mt-1 mx-0 p-0">
            <a className="col-12 col-md-2 px-0" href="/roboteando-view"><img className="col-3 col-md-2" src={roboteando} alt="Roboteando" /></a>
            <a className="col-12 col-md-2 px-0" href="/photon-view"><img className="col-3 col-md-2" src={photon} alt="Photon" /></a>
            <a className="col-12 col-md-2 px-0" href="/autostem-view"><img className="col-3 col-md-2" src={autostem} alt="Autostem" /></a>
            <a className="col-12 col-md-2 px-0" href="/aerostem-view"><img className="col-3 col-md-3" src={aerostem} alt="Aerostem" /></a>
            <a className="col-12 col-md-2 px-0" href="/tomi-view"><img className="col-3 col-md-2" src={tomi} alt="Tomi" /></a>
            <a className="col-12 col-md-2 px-0" href="/ponte-en-linea-view"><img className="col-3 col-md-3 ml-0 ml-md-5" src={ponteEnLinea} alt="Ponte En Línea" /></a>
            <a className="col-12 col-md-2 px-0" href="/bucky-view"><img className="col-3 col-md-2" src={bucky} alt="Bucky" /></a>
            <a className="col-12 col-md-2 px-0" href="/arduino-view"><img className="col-3 col-md-2 mx-5" src={arduino} alt="Arduino" /></a>
            <a className="col-12 col-md-2 px-0" href="/f1-view"><img className="col-3 col-md-2" src={f1} alt="F1" /></a>
        </div>
    )
}