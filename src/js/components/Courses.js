import React from 'react';
import courses from '../../img/courses.jpg';
import button from '../../img/button.png';

export const Courses = () => {
    return(
        <div className="container my-4">
            <div className="d-block row">
                <h2 className="courses-title col-6 col-md-5">CURSOS</h2>
                <div className="row mx-2">
                    <img src={courses} className="courses-logo col-12 col-md-6 mx-auto" alt="Cursos" />
                    <div className="col-11 col-md-5">
                        <p className="col-12 ml-4 ml-md-0 justify-text">
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