import React from 'react';
import logo from '../../img/logo-smartenglish.png';
import button from '../../img/button.png';

export const Courses = () => {
    return(
        <div className="container my-4">
            <div className="d-block m-1 row">
                <h2 className="courses-title col-6">CURSOS</h2>
                <div className="row mx-2">
                    <img src={logo} className="courses-logo col-12 col-md-5 mx-auto my-3" alt="Smart Engrlish" />
                    <div className="col-11 col-md-5 my-4">
                        <p className="courses-text justify-text">
                            Los cursos de Tecnikids Venezuela constituyen una innovadora opción
                            para que los alumnos puedan continuar con su formación escolar, desde 
                            la seguridad de sus hogares. Nuestros profesores certificados, ofrecen 
                            los contenidos más retadores y atractivos, consiguiendo que nuestros 
                            estudiantes se apasionen y comprometen con los programas.
                        </p>
                        <a className="programs-button p-center col-12" href="/courses-view">
                            <img src={button} className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}