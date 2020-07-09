import React from 'react';
import creativos from '../../img/creativos-icon.png';
import tecnologicos from '../../img/tecnologicos-icon.png';
import constructivos from '../../img/constructivos-icon.png';
import estructurados from '../../img/estructurados-icon.png';

export const Somos = () => {
    return(
        <div className="row">
            <div className="col-12 col-md-3">
                <img className="col-10 ml-4" src={creativos} />
                <h4 className="center-text mt-2">Creativos</h4>
                <p className="col-12 center-text">
                    Creamos espacios para el desarrollo del potencial creativo de 
                    niños y jóvenes.
                </p>
            </div>
            <div className="col-12 col-md-3">
                <img className="col-10 ml-4" src={tecnologicos} />
                <h4 className="center-text mt-2">Tecnológicos</h4>
                <p className="col-12 center-text">
                    El contacto e integración con la tecnoglogía es fundamental 
                    en nuestros Productos y Servicios.
                </p>
            </div>
            <div className="col-12 col-md-3">
                <img className="col-10 ml-4" src={constructivos} />
                <h4 className="center-text mt-2">Constructivos</h4>
                <p className="col-12 center-text">
                    Nuestra metodología promueve la construcción como base de 
                    trabajos y proyectos.
                </p>
            </div>
            <div className="col-12 col-md-3">
                <img className="col-10 ml-4" src={estructurados} />
                <h4 className="center-text mt-2">Estructurados</h4>
                <p className="col-12 center-text">
                    Nuestras actividades y tareas están perfectamente organizadas 
                    y estructuradas.
                </p>
            </div>
        </div>
    )
}