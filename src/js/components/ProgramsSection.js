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
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-5 px-5 mb-5 mt-1">
                    <a className="col-12 col-md-2 px-0" href="/roboteando-view"><img className="col-2" src={roboteando} /></a>
                    <a className="col-12 col-md-2 px-0" href="/photon-view"><img className="col-2" src={photon} /></a>
                    <a className="col-12 col-md-2 px-0" href="/autostem-view"><img className="col-2" src={autostem} /></a>
                    <a className="col-12 col-md-2 px-0" href="/aerostem-view"><img className="col-3" src={aerostem} /></a>
                    <a className="col-12 col-md-2 px-0" href="/tomi-view"><img className="col-2" src={tomi} /></a>
                    <br />
                    <a className="col-12 col-md-2 px-0" href="/roboteando-view"><img className="col-2" src={roboteando} /></a>
                    <img className="col-12 col-md-2 mx-3" src={python} />
                    <a className="col-12 col-md-2 px-0" href="/bucky-view"><img className="col-2" src={bucky} /></a>
                    <a className="col-12 col-md-2 px-0" href="/arduino-view"><img className="col-2 mx-5" src={arduino} /></a>
                    <a className="col-12 col-md-2 px-0" href="/f1-view"><img className="col-2" src={f1} /></a>
                </div>
            </div>
        </div>
    )
}