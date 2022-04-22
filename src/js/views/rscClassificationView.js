import React from "react";
import { Link } from "react-router-dom";
import { SeparationLines } from "../components/SeparationLines";

export const rscClassificationView = () => {

    return <div>
        <SeparationLines />
        <div className="container mx-auto p-sm-0 p-md-0">
            <div className="row">
                
                <div className="col-10 mx-auto text-center">
                    <h2 className="headerText"><b>¿QUIERES CLASIFICAR AL</b></h2>
                    <span className="headingText font-face-nxrg">PRIMER TORNEO INTERCOLEGIAL DE ROBÓTICA</span>
                    <h2 className="headerText"><b>DE VENEZUELA?</b></h2>
                </div>
            </div>
            <div className="row mx-auto mt-lg-4">
                <iframe
                    className="col-12 col-md-12 col-lg-6 mb-3 mb-md-0"
                    style={{ height: "600px" }}
                    src="https://www.youtube-nocookie.com/embed/-91lB9p9gZE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                </iframe>
                <div className="col-12 col-md-12 col-lg-6 mt-md-3">
                    <p className="text-justify">
                        <b>¡Desde el equipo de Tecnikids Venezuela estamos muy emocionados de tenerte en nuestra fase preliminar para el Torneo Intercolegial Robotics Science Competition!</b>{" "}{" "}Para ello se seleccionarán los mejores tres talentos en cada etapa por institución educativa.
                        <br /><br />
                        Esta será una excelente oportunidad para resaltar y reconocer las habilidades desarrolladas por nuestra comunidad estudiantil a través de nuestros programas de robótica en cada uno de las instituciones.
                        <br /><br />
                    </p>
                    <h1 className="text-center font-face-nxrg headerText" style={{ color: "#002C56" }}>¡PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA!</h1>
                </div>
            </div>
            <div className="row mx-auto pl-2 ml-lg-1 mt-lg-5">
                <h1 className="text-center text-uppercase mt-3 headerText font-face-nxrg">¿Cómo participan los estudiantes de los colegios aliados?</h1>

                <p>El proceso estará conformado por tres fases que se describen a continuación:

                    <br /><br />
                    <b>Fase 1:</b> Clasificatoria. Inicia el <b><i style={{ color: "#002C56" }}>4 de marzo y culmina el 1 de Abril</i></b>.
                    <br /><br />
                    <b>Fase 2:</b> Selección de estudiantes clasificados por colegios.
                    <br /><br />
                    El equipo de Tecnikids Venezuela escogerá tres estudiantes destacados por etapa y colegio, quienes integrarán los equipos que asistirán al RSC. Los resultados serán publicados el día 22 de abril.
                    <br /><br />
                    <b>Fase 3:</b> Preparación previa al RSC (Robotics Science Competition)
                    <br /><br />
                    Durante este período, los mentores reforzarán los conocimientos de sus alumnos mediante sesiones adicionales.</p>
            </div>
            <div className="row mx-auto ml-lg-1">
                <h1 className="text-center text-uppercase mt-5 mb-5 headerText font-face-nxrg">¿Cómo participar en la fase clasificatoria del torneo por niveles educativos?</h1>
                <br /><br />
                <p className="pl-4"><b>Selecciona tu etapa escolar:</b></p>
            </div>
            <div className="text-center mb-5">
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-6">
                        <a href="/minor-rsc-primary-view">
                            <img src="https://i.ibb.co/bWhK06Y/Boton-1.png" className="card-img-top" alt="Primaria Menor" />
                        </a>
                    </div>
                    <div className="col-sm-10 col-md-6">
                        <a href="/senior-rsc-primary-view">
                            <img src="https://i.ibb.co/HntNnc5/Boton-2.png" className="card-img-top" alt="Primaria Mayor" />
                        </a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-6">
                    <a href="/arduino-rsc-view">
                        <img src="https://i.ibb.co/P5zsFPf/Boton-3.png" className="card-img-top" alt="Bachillerato Arduino" />
                        </a>
                        </div>
                    <div className="col-sm-10 col-md-6">
                    <a href="/python-rsc-view">
                        <img src="https://i.ibb.co/pW41HVC/Boton-4.png" className="card-img-top" alt="Bachillerato Python" />
                        </a>
                        </div>
                </div>
            </div>
            <hr style={{ border: "none", height: "2px", background: "#002C56" }} />

            <div className="row text-center text-sm-center text-md-center justify-content-lg-center">
                <h1 className="headerText font-face-nxrg">INSTITUCIONES PARTICIPANTES</h1>
            </div>
            <div>
                <div className="row mb-3">
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/RjgxbmR/Clasificatoria-16.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/tHxTR3W/Clasificatoria-17.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/N31gbLc/Clasificatoria-18.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/jH8cY8v/Clasificatoria-19.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/ZhDshXW/Clasificatoria-20.png" className="card-img-top" alt="..." /></div>

                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/Tkfwfwk/Clasificatoria-21.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/DkrjZVP/Clasificatoria-22.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/QkZ0pCG/Clasificatoria-24.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/kXtn5f3/Clasificatoria-25.png" className="card-img-top" alt="..." /></div>
                
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/BzXwzz8/Clasificatoria-26.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/G54GWW4/Clasificatoria-27.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.ibb.co/2jP2hB8/Clasificatoria-28.png" className="card-img-top" alt="..." /></div>
                    <div className="col-4 col-md-3 col-sm-6 col-xl-3 mb-2"> <img src="https://i.imgur.com/vm07313.png" className="card-img-top" alt="..." /></div>

                    
                </div>
            </div>
            <hr style={{ border: "none", height: "2px", background: "#002C56" }} />

            <div className="row mx-auto justify-content-center">
                <img src="https://i.ibb.co/sC7KHp3/imagen-RSC.png" style={{width: "990px"}} className="img-fluid" alt="Robotic Science Competition"/>
                <a href="/rsc-resultados"><img src="https://i.imgur.com/GMuW1Oz.png" style={{width: "990px"}} className="img-fluid mt-5" alt="Resultados clasificatoria"/></a>
                <p className="text-center mt-5">
                    <b>Para más información puedes contactarnos:</b>
                    <br />
                    <a href="tel:+58-412-207-0246">+58 412 207 0246</a>
                    <br />
                    <a href="mailto:atencionalclientetk@gmail.com">atencionalclientetk@gmail.com</a>
                </p>
            </div>
            <div className="row justify-content-center align-items-md-center">
                <div className="col-7 col-md-4">
                    <img src="https://i.ibb.co/7J7Qdqr/Association-Logo-01-1.png" className="card-img-top" alt="American Robotics" />
                </div>
                <div className="col-7 col-md-4">
                    <img src="https://i.ibb.co/vX0Mz9V/LOGO-TK-PNG-30.png" className="card-img-top" alt="TecniKids" />
                </div>
                <div className="col-7 col-md-4">
                    <img src="https://i.ibb.co/g46JB6Y/logo-egb4.jpg" className="card-img-top" alt="EGB4 Technologies" />
                </div>
            </div>
        </div>
        <SeparationLines />
    </div>
};