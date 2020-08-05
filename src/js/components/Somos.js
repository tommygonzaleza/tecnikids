import React from 'react';
import creativos from '../../img/creativos-icon.png';
import tecnologicos from '../../img/tecnologicos-icon.png';
import constructivos from '../../img/constructivos-icon.png';
import estructurados from '../../img/estructurados-icon.png';

export const Somos = () => {
    return(
        <div className="row">
            <div className="col-12 col-md-3 ml-md-0 ml-4">
                <img className="col-8 ml-2 p-center" src={creativos} alt="Creativos"/>
                <h4 className="center-text mt-2">Creativos</h4>
                <p className="col-12 center-text">
                    Creamos espacios para el desarrollo del potencial creativo de 
                    niños y jóvenes.
                </p>
            </div>
            <div className="col-12 col-md-3 ml-md-0 ml-4">
                <img className="col-8 ml-2 p-center" src={tecnologicos} alt="Tecnológicos" />
                <h4 className="center-text mt-2">Tecnológicos</h4>
                <p className="col-12 center-text">
                    El contacto e integración con la tecnoglogía es fundamental 
                    en nuestros Productos y Servicios.
                </p>
            </div>
            <div className="col-12 col-md-3 ml-md-0 ml-4">
                <img className="col-8 ml-2 p-center" src={constructivos} alt="Constructivos" />
                <h4 className="center-text mt-2">Constructivos</h4>
                <p className="col-12 center-text">
                    Nuestra metodología promueve la construcción como base de 
                    trabajos y proyectos.
                </p>
            </div>
            <div className="col-12 col-md-3 ml-md-0 ml-4">
                <img className="col-8 ml-2 p-center" src={estructurados} alt="Estructurados" />
                <h4 className="center-text mt-2">Estructurados</h4>
                <p className="col-12 center-text">
                    Nuestras actividades y tareas están perfectamente organizadas 
                    y estructuradas.
                </p>
            </div>
        </div>
    )
}