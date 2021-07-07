import React from "react";
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';

export const CursoPythonView = () => {
    return(
        <div>
            <SeparationLines />
            <div className="container mx-auto text-secondary pl-3">
                <div className="row text-blue">
                    <div className="col-12 text-right">
                        <h5 style={{fontWeight: 700}}>¿Quieres aprender a <span style={{fontWeight: 900, fontSize: "36px"}}>programar</span>?</h5>
                        <br />
                        <p>Saber de programación será clave de aquí a unos años, ¿Cómo te preparas para los retos del futuro no tan lejano?</p>
                        <br />
                        <p>En Tecnikids traemos un curso de <span style={{fontWeight: 900, fontSize: "24px"}}>programación con PYTHON</span>, uno de los lenguajes de programación más usados y estuidados por expertos. Con actividades especiales de Illustrator, Photoshop y otras herramientas del mundo universitario.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-6 preventa pt-3">
                        <div className="col-12">
                            <h5>Costo:</h5>
                        </div>
                        <img className="w-75 mx-auto" src="https://i.ibb.co/SQhXW5v/precio-2.png" alt="Oficial Cost" />
                    </div>
                    <div className="col-12 col-md-6 text-right mt-2">
                        <p className="my-3 f-500"><strong>Información General:</strong></p>
                        <p><strong>Fecha:</strong> 2 al 27 de agosto 2021</p>
                        <p><strong>Edades:</strong> 13 - 18 años</p>
                        <p><strong>Modalidad:</strong> Virtual</p>
                        <p>Clases 3 veces a la semana.</p>
                        <p>Certificado avalado por Tecnikids Venezuela</p>
                    </div>
                </div>
                <div className="row my-5">
                    <img src="https://i.ibb.co/TMkkKy4/MOCKUP-PAGINA.png" alt="Kids Playing with Photon" className="w-100 col-12 img-fluid plan-vacacional-img" />
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h4><span className="text-blue">PROCESO DE INSCRIPCIÓN</span></h4>
                        <br />
                        <p>Pasos a seguir:</p>
                        <br />
                        <p>1. Realice el pago correspondiente a Tecnikids Venezuela <span className="text-blue">(Depósito Bancario o transferencia)</span>. Los datos se enviarán luego de ser llenado el formulario.</p>
                        <p>2. Llene el formulario de "<a className="planilla-link text-blue" href="https://forms.gle/hoXwaxpmbHtMuqbt6" target="_blank" rel="noreferrer">Planilla de Inscripción Plan Vacacional 2021</a>". Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.</p>
                        <p>3. Debe enviar el comprobante de pago al correo <a className="planilla-link text-blue" href="mailto:atencionalclientetk@tecnikidsve.com" rel="noreferrer">atencionalclientetk@gmail.com</a> para culminar con el proceso de inscripción y asegurar el cupo del participante. En el asunto debe colocar "Comprobante de pago" y el nombre del campista seguido por CURSOPYTHON (OBLIGATORIO).</p>
                        <br />
                        <p>En caso de una vez iniciado el Plan Vacacional, el campista decida abandonarlo por cualquier motivo, incluso con la autorización de los padres o tutores, no tendrá derecho a ninguna devolución.</p>
                        <br />
                        <p className="text-dark"><i>LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.</i></p>
                        <br />
                        <p>¡RECUERDA QUE SÓLO HAY CUPOS LIMITADOS!</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-right">
                        <p>Para más información puedes contactarnos:</p>
                        <p><span className="text-blue">Valentina Romero <a className="planilla-link" href="tel:+584122381919">+58 412 923 9839</a></span></p>
                        <p><a className="planilla-link text-blue" href="mailto:atencionalclientetk@tecnikidsve.com" rel="noreferrer">atencionalclientetk@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <SeparationLines />
        </div>
    )
    
}