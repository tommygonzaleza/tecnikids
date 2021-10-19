import React from 'react';
import { Link } from 'react-router-dom';

export const ProgramsSection = () => {
    return(
        <div className="col-11 p-center ml-0 ml-md-5 mb-5 mt-1 mx-0 p-0">
            <Link className="col-12 col-md-2 px-0" to="/roboteando-view"><img className="col-3 col-md-2" src="https://i.ibb.co/kcn6p1v/logo-roboteando.png" alt="Roboteando" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/photon-view"><img className="col-3 col-md-2" src="https://i.ibb.co/C1wkhBG/logo-photon-1.jpg" alt="Photon" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/autostem-view"><img className="col-3 col-md-2" src="https://i.ibb.co/SrqZ4dX/logo-autostem.png" alt="Autostem" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/aerostem-view"><img className="col-3 col-md-3" src="https://i.ibb.co/w77QznB/logo-aerostem.png" alt="Aerostem" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/tomi-view"><img className="col-3 col-md-2" src="https://i.ibb.co/GkbcL1r/logo-tomi.png" alt="Tomi" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/ponte-en-linea-view"><img className="col-3 col-md-3 ml-0 ml-md-5" src="https://i.ibb.co/B4bxXK1/logo-ponte-en-linea.png" alt="Ponte En Línea" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/bucky-view"><img className="col-3 col-md-2" src="https://i.ibb.co/YDHCrPW/logo-bucky.png" alt="Bucky" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/arduino-view"><img className="col-3 col-md-2 mx-5" src="https://i.ibb.co/sP9FGXS/logo-arduino.png" alt="Arduino" /></Link>
            <Link className="col-12 col-md-2 px-0" to="/f1-view"><img className="col-3 col-md-2" src="https://i.ibb.co/XtXkyYb/logo-f1.jpg" alt="F1" /></Link>
        </div>
    )
}