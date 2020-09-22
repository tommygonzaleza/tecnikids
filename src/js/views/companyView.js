import React from 'react';
import '../../styles/index.css';
import { MyNavbar } from '../components/MyNavbar';
import { MyFooter } from '../components/MyFooter';
import { SeparationLines } from '../components/SeparationLines';
import { Stadistics } from '../components/Stadistics';
import { Somos } from '../components/Somos';
import team from '../../img/teamtk.jpeg';
import program1 from '../../img/program-1.png';
import program2 from '../../img/program-2.jpg';
import program3 from '../../img/program-3.jpg';
import program4 from '../../img/program-4.jpg';


export const CompanyView = () => {
    return(
        <div className="">
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <p className="col-11 col-md-6 ml-md-0 ml-4 mt-0 mt-md-4 justify-text">
                        Somos una empresa guatemalteca que inició el sueño de integrar educación
                        y tecnología en 1995. Hoy en día en 5 países, entre ellos, Guatemala, 
                        Honduras, El Salvador, Costa Rica y en Venezuela.
                        <br />
                        <br />
                        Innovamos constantemente en el desarrollo e implementación de programas 
                        de integración curricular en el área de informática, robótica pedagógica 
                        y valores para instituciones educativas.
                        <br />
                        <br />
                        Todos nuestros servicios cuentan con el aval de instituciones 
                        internacionales de renombre, personal calificado y equipo de vanguardia.
                    </p>
                    <div className="col-md-1"></div>
                    <img className="col-10 col-md-4 mt-0 ml-md-0 ml-5 company-logo" src={team} alt="Team tecnikids Venezuela" />
                </div>
            </div>
            <SeparationLines />
            <div className="container my-5">
                <div className="row col-12">
                    <br />
                    <Somos />
                </div>
            </div>
            <SeparationLines />
            <Stadistics />
            <SeparationLines />
            <div className="container my-3">
                <div className="row col-12">
                    <h2 className="col-12 ml-md-0 ml-3">MISIÓN</h2>
                    <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
                        Brindar soluciones en materia de tecnología educativa a través de asesoría 
                        y servicio personalizado con talento humano de excelencia.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-10 col-7"></div>
                    <h2 className="col-5 col-md-2">VISIÓN</h2>
                    <br />
                    <div className="col-md-6"></div>
                    <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
                        Ser la empresa líder que brinde asesorías y soluciones integradas de 
                        educación y tecnología en Venezuela.
                    </p>
                </div>
            </div>
            <SeparationLines />
            <div className="container">
                <div className="row mx-2">
                    <h2 className="col-12">Programas</h2>
                    <div className="row mx-2">
                        <div className="col-12 col-md-6">
                            <h3 className="col-12 my-2 my-md-4" id="clases_de_informatica">
                                Programa de Informática Educativa
                            </h3>
                            <p className="col-11 justify-text">
                                Tecnikids le ofrece a escuelas, colegios y universidades, un servicio educativo 
                                integral en la enseñanza de la Informática y Computación para estudiantes de 
                                todos los niveles, desde Preescolar hasta Bachillerato, con el uso de las TICS 
                                (Tecnologías de la Información y las Comunicaciones). 
                            </p>
                        </div>
                        <img src={program1} className="col-12 col-md-6 mx-auto my-auto" alt="Programa de Informática Educativa" />
                    </div>
                    <div className="row mx-2 mt-5">
                        <img src={program2} className="col-12 col-md-6 mx-auto my-auto" alt="Programa de Robótica Educativa" />
                        <div className="col-12 col-md-6">
                            <h3 className="col-12 my-2 my-md-4" id="clases_de_robotica">
                                Programa de Robótica Educativa
                            </h3>
                            <p className="col-11 justify-text">
                                Tecnikids le ofrece a escuelas, colegios y universidades, un servicio educativo 
                                integral en la enseñanza de Robótica para estudiantes de todos los niveles, 
                                desde Preescolar hasta Bachillerato; desarrollando en los estudiantes habilidades 
                                y competencias claves para su futuro profesional. 
                            </p>
                        </div>
                    </div>
                    <div className="row mx-2 mt-5">
                        <div className="col-12 col-md-6">
                            <h3 className="col-12 my-2 my-md-4" id="programa_de_valores">
                                Programa de Valores
                            </h3>
                            <p className="col-11 justify-text">
                                Tecnikids le ofrece a escuelas, colegios y universidades, un servicio educativo 
                                integral en la enseñanza de Valores para estudiantes de todos los niveles, desde 
                                Preescolar hasta Bachillerato, promovemos en la comunidad educativa que el 
                                estudiante sea protagonista de su propia vida y al mismo tiempo pueda 
                                desarrollarse integralmente en medio de la sociedad. 
                            </p>
                        </div>
                        <img src={program3} className="col-12 col-md-6 mx-auto my-auto" alt="Programa de Valores" />
                    </div>
                    <div className="row mx-2 my-5">
                        <img src={program4} className="col-12 col-md-5 mx-auto my-auto" alt="Laboratorios de Computación" />
                        <div className="col-12 col-md-6">
                            <h3 className="col-12 my-2 my-md-4" id="laboratorios">
                                Laboratorios en Computación
                            </h3>
                            <p className="col-11 justify-text">
                                Tecnikids le ofrece a escuelas, colegios y universidades, un servicio educativo 
                                integral para el montaje y mantenimiento de Laboratorios de Informática y 
                                Computación de acuerdo a su presupuesto, con la instalación de los mejores 
                                equipos de tecnología. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}