import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';
import button from '../../../img/button.png';
import roboteando from '../../../img/roboteando.png';

export const RoboteandoView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-9 col-md-3 ml-0 my-footer-logo">ROBOTEANDO</h2>
                    <h3 className="col-10 col-md-12 ml-5 ml-md-3 pl-4 pl-md-0">ROBOTEANDO 1</h3>
                    <div className="row mx-2">
                        <p className="col-11 col-md-6 ml-4 ml-md-0 justify-text">
                            El programa Roboteando ofrece diferentes niveles de acuerdo con las necesidades 
                            académicas de cada escuela. ROBOTEANDO 1era Etapa está diseñado para principiantes, 
                            por lo que se presentan los temas principales sobre robótica, como las máquinas 
                            simples, que es clave para una mejor comprensión del proceso de operación y 
                            fabricación de un robot. Este programa tiene una versión PLUS, que incluye 
                            materiales adicionales, robots programables y actividades para estos materiales.
                        </p>
                        <div className="col-12 col-md-6 ml-3 ml-md-0 center-text">
                            <img className="col-12 col-md-9 mb-3" src={roboteando} alt="Roboteando"/>
                            <a className="col-12 my-5" href="http://usa.egb4.com/roboteando-primera-etapa">
                                <img src={button} className="col-9 col-md-7" alt="Button" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h3 className="col-10 col-md-12 ml-5 ml-md-3 pl-4 pl-md-0">ROBOTEANDO 2</h3>
                    <div className="row">
                        <iframe 
                            className="col-11 col-md-6 mx-auto pl-5 pl-md-0 mb-3 mb-md-0"
                            style={{height: '350px'}}
                            title="Stem Video"
                            src="https://www.youtube.com/embed/8WQbfY6PX0c" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        </iframe>
                        <div className="col-12 col-md-5 my-md-4 my-0">
                            <p className="ml-4 ml-md-0 justify-text">
                                ROBOTEANDO 2da Etapa está diseñado para escuelas con más experiencia en el campo de la 
                                robótica. Algunos de los conceptos explorados son la electrónica, la programación y el 
                                proceso de ensamblaje de robots sofisticados.
                                <br />
                                <br />
                                El programa está estructurado de la siguiente manera:
                            </p>
                        </div>
                        <div className="row mt-0 mt-md-5 ml-5">
                            <p className="col-11 col-md-6 ml-0 justify-text">
                                Preescolar:
                                <br />
                                20 lecciones, más 10 lecciones de programación en línea.
                                <br />
                                <br />
                                Escuela primaria y bachillerato:
                                <br />
                                20 lecciones por grado escolar.
                                <br />
                                2 lecciones introductorias sobre robótica.
                                <br />
                                10 lecciones sobre mecánica.
                                <br />
                                8 lecciones sobre electricidad a través de la electrónica.
                                <br />
                                <br />
                                Escuela secundaria:
                                <br />
                                20 lecciones (Microsoft Robotics, Mechanics, Electronics), cada una está diseñada para 
                                dos sesiones.
                            </p>
                            <div className="col-12 col-md-6 my-auto center-text">
                                <img className="col-12 col-md-10 mb-3" src={roboteando} alt="roboteando"/>
                            </div>
                        </div>
                        <div className="col-12 ml-3 ml-md-0 mt-3 mb-5 center-text">
                            <a className="col-12 col-md-4 my-5" href="http://usa.egb4.com/roboteando-primera-etapa">
                                <img src={button} className="col-9 col-md-3" alt="Button" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}