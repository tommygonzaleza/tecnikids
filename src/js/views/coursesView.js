import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyFooter } from '../components/MyFooter';
import SmartEnglish from '../../img/logo-smartenglish.png';
import { Button } from 'react-bootstrap';
import { SeparationLines } from '../components/SeparationLines';

export const CoursesView = () => {
    return(
        <div className="container-fluid">
            <MyNavbar />
            <SeparationLines />
                <div className="container">
                    <div className="row">
                        <h2 className="row col-2 my-footer-logo">CURSOS</h2>
                        <h3 className="row col-10 col-md-12 ml-md-0 ml-5">SMART ENGLISH</h3>
                        <div className="row">
                            <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text my-3">
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
                            <div className="col-1"></div>
                            <a className="col-12 col-md-5" href="http://smartenglishonline.com.mx/"><img src={SmartEnglish} className="col-12 p-center" alt="Smart English" /></a>
                        </div>
                        <div className="row mt-5">
                            <p className="col-10 col-md-6 ml-md-0 ml-5 justify-text">
                                La familia de TOEFL de Evaluaciones incluye:
                            </p>
                            <br />
                            <br />
                            <h4 className="col-10 ml-md-0 ml-5">TOEFL Primary Step 1 (CEFR A2):</h4>
                            <p className="col-10 ml-md-0 ml-5 justify-text">
                                Examen institucional diseñado para certificar el idioma inglés para 
                                alumnos de primaria que incursionan en el idioma inglés.
                            </p>
                            <br />
                            <br />
                            <h4 className="col-10 ml-md-0 ml-5">TOEFL Primary Step 2 (CEFR B1):</h4>
                            <p className="col-10 ml-md-0 ml-5 justify-text">
                                Examen institucional diseñado para certificar el idioma inglés para 
                                alumnos de primaria que ya han adquirido habilidades básicas en este 
                                idioma.
                            </p>
                            <br />
                            <br />
                            <h4 className="col-10 ml-md-0 ml-5">TOEFL Junior (CEFR B2):</h4>
                            <p className="col-10 ml-md-0 ml-5 justify-text">
                                Examen institucional diseñado para certificar el idioma inglés para 
                                programas de nivel secundaria.
                            </p>
                            <br />
                            <br />
                            <h4 className="col-10 ml-md-0 ml-5">Criterion y Speaking:</h4>
                            <p className="col-10 ml-md-0 ml-5 justify-text">
                                Son componentes disponibles para complementar los exámenes de TOEFL 
                                Junior y Primary, lo cual permite evaluar todas las habilidades 
                                lingüísticas (comprensión oral, comprensión de lectura, expresión 
                                oral y escrita expresión).
                            </p>
                            <br />
                            <br />
                            <h4 className="col-10 ml-md-0 ml-5">TOEFL ITP Level 1 (CEFR C1):</h4>
                            <p className="col-10 ml-md-0 ml-5 justify-text">
                                Examen institucional diseñado para certificar el nivel de inglés 
                                para programas universitarios.
                            </p>
                            <br />
                            <br />
                            <h4 className="col-10 ml-md-0 ml-5">TOEFL ITP Level 2 (CEFR B1):</h4>
                            <p className="col-10 ml-md-0 ml-5 justify-text">
                                Examen institucional diseñado para certificar el nivel de inglés 
                                para programas universitarios.
                            </p>
                        </div>
                        <div className="row">
                            <Button className="col-md-3 col-6 my-5 p-center" variant="primary" href="http://smartenglishonline.com.mx/">MÁS INFORMACIÓN</Button>
                        </div>
                        
                    </div>
                </div>
                <SeparationLines />
            <MyFooter />
        </div>
    )
}