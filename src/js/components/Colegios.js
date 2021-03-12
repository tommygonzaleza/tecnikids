import React from 'react';

export const Colegios = () => {
    return(
        <div className="container my-5">
            <h2 className="col-6">INSTITUCIONES EDUCATIVAS</h2>
            <div className="row w-auto my-3">
                <div className="col-md-1"></div>
                <div className="col-12">
                    <a href="http://www.canigua.com/"><img src="https://i.ibb.co/bbTQ3dK/logo-canigua.png" alt="Colegio Canigua" className="col-md-2 col-4"/></a>
                    <a href="https://www.instagram.com/colegiolosarcos/?hl=es-la"><img src="https://i.ibb.co/VNH052V/logo-los-arcos.jpg" alt="Colegio Los Arcos" className="col-md-2 col-3"/></a>
                    <a href="https://colegiosimonbolivar.edu.ve/"><img src="https://i.ibb.co/JRdCBqH/logo-simon-bolivar.png" alt="Colegio Simón Bolívar" className="col-md-2 col-4"/></a>
                    <a href="https://www.colegiororaima.com/"><img src="https://i.ibb.co/0tkpGL7/logo-roraima.jpg" alt="Colegio Roraima" className="col-md-3 col-4"/></a>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
    
}