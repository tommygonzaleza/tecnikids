import React from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../img/logo-1.png';

export const Programs = () => {
    return(
        <div className="container my-4" >
            <div className="d-block m-1 row">
                <h2 className="programs-title col-6">¿POR QUÉ NUESTROS PROGRAMAS?</h2>
                <div className="row mx-2">
                    <p className="programs-text col-10 col-md-6 my-4">
                        Nuestros programas están basados en la técnica STEM, que permite a los estudiantes 
                        desarrollar su creatividad y pensamiento crítico, a través de áreas como la ciencia, 
                        tecnología, ingeniería, diseño y matemáticas, disciplinas que serán fundamentales 
                        para desnvolverse en el campo laboral de la industria 4.0.
                    </p>
                    <img src={logo} className="programs-logo col-12 col-md-4 mx-auto my-3" />
                </div>
            </div>
            <div className="w-100 mt-3">
                <Button className="programs-button mt-3" variant="primary" href="/programs-view">MÁS INFORMACIÓN</Button>
            </div>
        </div>
    );
}