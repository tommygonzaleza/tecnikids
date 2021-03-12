import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyFooter } from '../components/MyFooter';
import { SeparationLines } from '../components/SeparationLines';

export const CoursesView = () => {
    return(
        <div className="container-fluid">
            <MyNavbar />
            <SeparationLines />
                <div className="container">
                    <div className="row mt-0 mt-md-4">
                        <h2 className="col-5 col-md-2 ml-0 ml-md-3 my-footer-logo">CURSOS</h2>
                        <h3 className="col-10 col-md-12 ml-5 ml-md-3 pl-4 pl-md-0">SMART ENGLISH</h3>
                        <div className="row mx-2">
                            <p className="col-11 col-md-6 ml-4 ml-md-0 justify-text">
                                El idioma inglés se ha convertido en una oportunidad global. Para 
                                ampliar las oportunidades educativas y profesionales es necesario 
                                adquirir toda la gama de habilidades lingüísticas en este idioma.
                                <br />
                                <br />
                                Las certificaciones TOEFL permiten conocer el nivel de dominio del 
                                inglés, usando métricas estandarizadas y niveles que pueden ser 
                                interpretados por las universidades e instituciones educativas más 
                                prestigiosas. Los resultados permiten tomar decisiones bien 
                                fundamentadas con respecto al ingreso, avance o culminación de 
                                programas académicos rigurosos en inglés.
                            </p>
                            <div className="col-12 col-md-6 ml-3 ml-md-0 mb-5 center-text">
                                <img className="col-12 col-md-10 mb-4" src="https://i.ibb.co/SsmxF0X/logo-smartenglish.png" alt="Smart English"/>
                                <a className="col-12" href="http://smartenglishonline.com.mx/">
                                    <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-7" alt="Button" />
                                </a>
                            </div>
                        </div>
                        <h3 className="col-7 col-md-1 ml-0 ml-md-5 pl-0 pl-md-5 p-left">PYTHON</h3>
                        <div className="row mx-2">
                            <div className="col-12 col-md-6 ml-3 ml-md-0 mb-5 center-text">
                                <img className="col-8 col-md-5 mb-4" src="https://i.ibb.co/tzSd71L/logo-python.png" alt="Python"/>
                                <a className="col-12" href="https://www.python.org/">
                                    <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-7" alt="Button" />
                                </a>
                            </div>
                            <p className="col-11 col-md-5 ml-4 ml-md-5 justify-text">
                                Python es uno de los lenguajes de programación más conocidos a nivel mundial. 
                                A través de nuestro curso los estudiantes desde los 7 a 18 años, tendrán la 
                                oportunidad de aprender a programar desde los más sencillo a proyectos como 
                                calculadoras de gastos, diccionarios, e incluso videojuegos. Todo es a través 
                                de nuestra plataforma, desarrollada por módulos con vídeos, retos y actividades 
                                que permiten que los estudiantes puedan aprender por su propia cuenta.
                            </p>
                        </div>
                        <h3 className="col-10 col-md-12 ml-5 ml-md-3 pl-4 pl-md-0">LEGO</h3>
                        <div className="row mx-2 mb-2 mb-5">
                            <p className="col-11 col-md-6 ml-4 ml-md-0 justify-text">
                                El curso de Lego permite a los alumnos desde los 7 a 18 años aprender sobre 
                                conceptos de robótica, programación e ingeniería a través de 3 programas 
                                directo de LEGO. Tienen la oportunidad de construir estructuras del mundo 
                                real con piezas de LEGO con nuestro simulador y aprender a programarlas para 
                                realizar distintas tareas.
                                <br />
                                <br />
                                El curso está estructurado por módulos, sesiones, retos y actividades para 
                                que el alumno pueda obtener conocimientos por su propia cuenta. En caso de 
                                necesitar apoyo, recibirá atención necesaria para entender.
                            </p>
                            <div className="col-12 col-md-6 ml-3 ml-md-0 mb-5 center-text">
                                <img className="col-12 col-md-8 mb-4" src="https://i.ibb.co/27bpYky/logo-lego.png" alt="Lego"/>
                            </div>
                        </div>
                    </div>
                </div>
                <SeparationLines />
            <MyFooter />
        </div>
    )
}