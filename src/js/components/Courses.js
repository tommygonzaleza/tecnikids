import React from 'react';
import { Link } from 'react-router-dom';

export const Courses = () => {
    return(
        <div className="container my-4">
            <div className="d-block row">
                <h2 className="courses-title col-6 col-md-5">CURSOS</h2>
                <div className="row mx-2">
                    <img src="https://i.ibb.co/6FFqvG8/smartenglish.jpg" className="courses-logo col-12 col-md-6 mx-auto" alt="Cursos" />
                    <div className="col-11 col-md-5">
                        <p className="col-12 ml-4 ml-md-0 justify-text">
                            Los cursos de Tecnikids Venezuela constituyen una innovadora opción
                            para que los alumnos puedan continuar con su formación escolar, desde 
                            la seguridad de sus hogares. Nuestros profesores certificados, ofrecen 
                            los contenidos más retadores y atractivos, consiguiendo que nuestros 
                            estudiantes se apasionen y comprometen con los programas.
                        </p>
                        <Link className="programs-button p-center col-12" to="/courses-view">
                            <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-7" alt="Button" />
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}