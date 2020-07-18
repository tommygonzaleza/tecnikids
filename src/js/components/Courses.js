import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../img/logo-smartenglish.png';

export const Courses = () => {
    return(
        <div className="container my-4">
            <div className="d-block m-1 row">
                <h2 className="courses-title col-6">CURSOS</h2>
                <div className="row mx-2">
                    <img src={logo} className="courses-logo col-12 col-md-5 mx-auto my-3" alt="Tecnikids" />
                    <p className="courses-text col-10 col-md-6 my-4 justify-text">
                        Los cursos de Tecnikids Venezuela constituyen una innovadora opción
                        para que los alumnos puedan continuar con su formación escolar, desde 
                        la seguridad de sus hogares. Nuestros profesores certificados, ofrecen 
                        los contenidos más retadores y atractivos, consiguiendo que nuestros 
                        estudiantes se apasionen y comprometen con los programas.
                    </p>
                </div>
            </div>
            <div className="w-100 mt-3">
                <Button className="courses-button mt-3" variant="primary" href="/courses-view">MÁS INFORMACIÓN</Button>
            </div>
        </div>
    )
}