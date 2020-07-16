import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';
import { Button } from 'react-bootstrap';
import roboteando from '../../../img/roboteando.png';

export const RoboteandoView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-3 my-footer-logo">ROBOTEANDO</h2>
                    <h3 className="col-12">ROBOTEANDO 1</h3>
                    <div className="row">
                        <p className="col-12 col-md-5 justify-text">
                            El programa Roboteando ofrece diferentes niveles de acuerdo con las necesidades 
                            académicas de cada escuela. ROBOTEANDO 1era Etapa está diseñado para principiantes, 
                            por lo que se presentan los temas principales sobre robótica, como las máquinas 
                            simples, que es clave para una mejor comprensión del proceso de operación y 
                            fabricación de un robot. Este programa tiene una versión PLUS, que incluye 
                            materiales adicionales, robots programables y actividades para estos materiales.
                        </p>
                        <div className="col-2"></div>
                        <div className="col-12 col-md-5">
                            <img className="col-10 p-center" src={roboteando} alt="roboteando"/>
                            <Button className="col-10 col-md-5 mt-3 p-center" variant="primary" href="http://usa.egb4.com/roboteando-primera-etapa">MÁS INFORMACIÓN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <div className="col-9"></div>
                    <h3 className="col-3">ROBOTEANDO 2</h3>
                    <div className="row">
                        <div className="col-12 col-md-5 mt-5">
                            <Button className="col-10 col-md-5 mt-3 p-center mt-5" variant="primary" href="http://usa.egb4.com/roboteando--second-stage">MÁS INFORMACIÓN</Button>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-12 col-md-5">
                            <p className="justify-text f-right">
                                ROBOTEANDO 2da Etapa está diseñado para escuelas con más experiencia en el campo de la 
                                robótica. Algunos de los conceptos explorados son la electrónica, la programación y el 
                                proceso de ensamblaje de robots sofisticados.
                                <br />
                                El programa está estructurado de la siguiente manera:
                                <br />
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
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}