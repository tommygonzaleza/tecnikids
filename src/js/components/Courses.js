import React from 'react';

export const Courses = () => {
    return(
        <div className="container my-4">
            <div className="d-block row">
                {/* <h2 className="courses-title col-6 col-md-5">CURSOS</h2> */}
                <div className="row mx-2">
                <iframe 
                    className="col-10 col-md-12 mx-auto mr-5 mr-md-0 mb-3 mb-md-0 mt-0 mt-md-2"
                    style={{height: '700px'}}
                    title="Gestion TK Sep 2022"
                    src="https://www.youtube.com/embed/dVoQ8vIUmrs" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                >
                </iframe>
                    {/* <div className="col-11 col-md-5">
                        <p className="col-12 ml-4 ml-md-0 justify-text">
                            Los cursos de Tecnikids Venezuela constituyen una innovadora opción
                            para que los alumnos puedan continuar con su formación escolar, desde 
                            la seguridad de sus hogares. Nuestros profesores certificados, ofrecen 
                            los contenidos más retadores y atractivos, consiguiendo que nuestros 
                            estudiantes se apasionen y comprometen con los programas.
                        </p>
                        <a className="programs-button p-center col-12" href="/courses-view">
                            <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div> */}
                </div>
            </div>
            
        </div>
    )
}