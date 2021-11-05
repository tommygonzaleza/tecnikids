import React from 'react';
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';

export const CursoCriptoView = () => {
    return (
        <div className="container-fluid">
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img className="w-100" src="https://i.ibb.co/R66gkJ8/Banner-Intro-Cripto.png" alt="Introducción a las Cripto" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h4 className="text-blue text-center">¡Para nuestros estudiantes de 3ero, 4to y 5to año tenemos un curso que sabemos les va a interesar!</h4>
                        <p className="text-center text-gray">Se trata de un curso introductorio a las criptomonedas junto a nuestros aliados Tradewithus. En este curso los jóvenes con edades comprendidas <strong>entre 15 y 18 años</strong> conocerán los conceptos básicos sobre el sistema bancario actual, el rol del dinero, la criptomoneda y su funcionamiento, y, la nueva tecnología (blockchain).</p>
                        <br />
                        <p className="text-center text-gray">No sólo aprenderán las diferencias y similitudes entre una criptomoneda, Dólar, Euro y Oro, sino que también estarán capacitados para identificar los usos adecuados de estas criptomonedas que han revolucionado en la última década.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img className="w-100" src="https://i.ibb.co/xM1ys5X/Curso-Intro-a-las-Cripto-1.png" alt="Introducción a las Cripto" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4 col-10 mx-auto">
                        <a href="https://drive.google.com/file/d/1RpisBVXv-3qwnJ3Tlhiyatiw4ohhZalJ/view?usp=sharing" target="_blank" rel="noreferrer" >
                            <img className="w-100" src="https://i.ibb.co/c12whNH/Curso-Intro-a-las-Cripto-4.png" alt="Botón" />
                        </a>
                    </div>
                </div>
                <div className="row blue-bottom-border mb-3">
                    <div className="col-12">
                        <h4 className="text-blue text-center">¿Qué esperas para aprender sobre un tema actual y de tanta importancia para nuestro día a día?</h4>
                        <p className="text-gray text-center"><strong>El curso comienza el Lunes 22 de Noviembre</strong> y consta de 4 sesiones en modalidad virtual, no necesitarán de ningún tipo de conocimiento adicional para poder realizar este curso. Sólo deben contar con un ordenador con conexión estable a internet para poder acceder al contenido de este.</p>
                        <img className="w-100 mb-3" src="https://i.ibb.co/LN3sWyx/Curso-Intro-a-las-Cripto-2.png" alt="Criptos Más Relevantes" />
                    </div>
                </div>
                <div className="col-12 f-weigth-600">
                    <h6 className="text-blue text-center">PROCESO DE INSCRIPCIÓN</h6>
                    <br />
                    <p className="text-center text-gray">Pasos a seguir:</p>
                    <p className="text-center text-gray">
                        1. Realice el pago correspondiente a Tecnikids Venezuela (Depósito Bancario o transferencia). Los datos se enviarán luego de ser llenado el formulario.
                        <br />
                        2. Llene el formulario de <a className="planilla-link" href="https://docs.google.com/forms/d/1nMumq2tj35nr2Thmkb5It89ytpIqY_r9pSX3vhiG1d4/viewform?edit_requested=true" target="_blank" rel="noreferrer">"Planilla de Inscripción CursoINTROALASCRIPTO - Tecnikids VE 2021"</a>. Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.
                        <br />
                        3. Debe enviar el comprobante de pago al correo <a className="planilla-link" href="mailto:atencionalclientetk@gmail.com">atencionalclientetk@gmail.com</a> para culminar con el proceso de inscripción y asegurar el cupo del estudiante. En el asunto debe colocar "Comprobante de pago - CursoCriptomonedas" y el nombre del estudiante (OBLIGATORIO).
                    </p>
                    <br />
                    <p className="text-center text-gray">
                        LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.
                    </p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img className="w-100" src="https://i.ibb.co/WnNvWZR/LOGO-TK-PNG-30.png" alt="Logo Tecnikids" />
                    </div>
                    <div className="col-8 d-flex">
                        <img className="w-100" style={{ alignSelf: "center" }} src="https://i.ibb.co/6ZDKRQk/LOGO-TWU-CRYPTO-CONSULTING.png" alt="Logo Trade With Us" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <p className="text-gray"><strong>Para más información puedes contactarnos:</strong></p>
                        <p><span className="text-blue">Valentina Romero <a className="planilla-link" href="tel:+584122381919">+58 412 923 9839</a></span></p>
                        <p><a className="planilla-link" href="mailto:atencionalclientetk@tecnikidsve.com" rel="noreferrer">atencionalclientetk@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <SeparationLines />
        </div>
    )
}