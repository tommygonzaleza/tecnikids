import React from 'react';
import '../../../styles/index.css';
import { SeparationLines } from '../../components/SeparationLines';

export const F1View = () => {
    return(
        <div>
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-5">
                    <p className="col-11 col-md-6 justify-text">
                        <span className="f-weigth-600">F1</span> in Schools es un programa en el 
                        cual los alumnos pueden desarrollar habilidades de ingeniería, tecnología 
                        y ciencias, a través del diseño y fabricación de automóviles de carreras 
                        a pequeña escala.
                        <br />
                        <br />
                        Es una increíble oportunidad para despertar el interés y la curiosidad, 
                        de los alumnos por las carreras técnicas.
                    </p>
                    <div className="col-12 col-md-6 mb-5 mt-5 center-text">
                        <img className="col-12 col-md-9 mb-4" src="https://i.ibb.co/XtXkyYb/logo-f1.jpg" alt="F1"/>
                    </div>
                    <iframe 
                        className="col-12 col-md-10 mx-auto mb-5 my-md-5"
                        style={{height: '450px'}}
                        title="Stem Video"
                        src="https://www.youtube.com/embed/P9eOPX5u7To" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <a className="col-12 col-md-6 mb-4 ml-5 pl-1 pl-md-5 p-center" href="https://www.f1inschools.com/">
                        <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-7 ml-md-4" alt="Button" />
                    </a>
                </div>
            </div>
            <SeparationLines />
        </div>
    )
}