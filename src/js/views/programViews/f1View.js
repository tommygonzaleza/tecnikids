import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import f1 from '../../../img/logo-f1.jpg';
import { Button } from 'react-bootstrap';

export const F1View = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">F1</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            F1 in Schools es un programa en el cual los alumnos pueden desarrollar 
                            habilidades de ingeniería, tecnología y ciencias, a través del diseño y 
                            fabricación de automóviles de carreras a pequeña escala.
                            <br />
                            <br />
                            Es una increíble oportunidad para despertar el interés y la curiosidad, 
                            de los alumnos por las carreras técnicas.
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5 mt-5">
                            <img src={f1} className="col-10 p-center mb-5" alt="F1" />
                            <Button className="col-10 col-md-5 mt-3 p-center" variant="primary" href="https://www.f1inschools.com/">MÁS INFORMACIÓN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}