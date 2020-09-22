import React from 'react';
import button from '../../img/button.png';

export const Programs = () => {
    return(
        <div className="container my-4" >
            <div className="m-1 row">
                <div className="col-12 col-md-5 d-inline-block">
                    <h2 className="programs-title">¿POR QUÉ NUESTROS PROGRAMAS?</h2>
                    <div className="col-12 my-4">
                        <p className="programs-text justify-text">
                            Nuestros programas están basados en la técnica STEM, que permite a los estudiantes 
                            desarrollar su creatividad y pensamiento crítico, a través de áreas como la ciencia, 
                            tecnología, ingeniería, diseño y matemáticas, disciplinas que serán fundamentales 
                            para desenvolverse en el campo laboral de la industria 4.0.
                        </p>
                        <a className="programs-button p-center col-12" href="/programs-view">
                            <img src={button} className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div>
                </div>
                <iframe 
                    className="col-10 col-md-6 mx-auto mr-5 mr-md-0 mb-3 mb-md-0 mt-0 mt-md-2"
                    style={{height: '400px'}}
                    title="Stem Video"
                    src="https://www.youtube.com/embed/Dznzcl2fm-g" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    );
}