import React from "react";
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';
import {Link} from "react-router-dom";

export const PlanVacacionalView = () => {
    return (
        <div>
            <SeparationLines />
            <div className="container mx-auto text-secondary f-weigth-600">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://i.ibb.co/G5hjvX5/PLANV-LOGO12-X19-DEF.png" alt="Logo Plane Vacacional" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 text-right mt-2">
                        <h2 className="">¡CUPOS LIMITADOS!</h2>
                        <p className="my-3 f-500"><strong>Información General:</strong></p>
                        <p><strong>Fecha:</strong> 2 al 27 de agosto 2021</p>
                        <p><strong>Duración:</strong> 3 veces a la semana, 3 horas al día</p>
                        <p><strong>Edades:</strong> 3 - 12 años</p>
                        <p><strong>Lugar:</strong> El Cafetal</p>
                        <p><strong>Modalidad:</strong> Semipresencial - Virtual</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12">
                        <p>Costo:</p>
                        <p><strong>Preventa:</strong> (Hasta el doming 27 de junio)</p>
                    </div>
                    <div className="col-12 col-md-6 border-right">
                        <img className="w-100" src="https://i.ibb.co/0hZ9HNQ/Artboard-5-calidad.png" alt="Presale Cost" />
                    </div>
                    <div className="col-12 col-md-6">
                        <img className="w-100" src="https://i.ibb.co/wc9tB0b/Artboard-6-calidad.png" alt="Oficial Cost" />
                    </div>
                </div>
                <div className="row my-5">
                    <img src="https://i.ibb.co/48Yhw7w/Tecnikids-fotos-1.jpg" alt="Kids Playing with Photon" className="w-100 col-12 img-fluid" />
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h4><span className="text-blue">PROCESO DE INSCRIPCIÓN</span></h4>
                        <br />
                        <p>Pasos a seguir:</p>
                        <br />
                        <p>1. Realice el pago correspondiente a Tecnikids Venezuela <span className="text-blue">(Depósito Bancario, transferencia o efectivo)</span>. Los datos se enviarán luego de ser llenado el formulario.</p>
                        <p>2. Llene el formulario de "<a className="planilla-link" href="https://forms.gle/J8nFMeMNt6qHAchYA" target="_blank">Planilla de Inscripción Plan Vacacional 2021</a>". Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.</p>
                        <p>3. Al optar por la modalidad Semi Presencial deberá leer y firmar la Planilla de Condiciones Generales <Link className="planilla-link" to="/Planilla Aceptacion de Condiciones - Campamento Tecnikids.pdf" target="_blank" download>(Descarga aquí)</Link>.</p>
                        <p>4. Debe enviar el comprobante de pago y Planilla de Condiciones Generales (Semi Presencial) al correo <a className="planilla-link" href="mailto:atencionalclientetk@tecnikidsve.com">atencionalclientetk@gmail.com</a> para culminar con el proceso de inscripción y asegurar el cupo del participante. En el asunto debe colocar "Comprobante de pago" y el <ins>nombre del campista</ins> (OBLIGATORIO).</p>
                        <p>5. El gasto de cualquier accidente ocurrido, durante el Plan Vacacional, cualquier gasto necesario es responsabilidad de los padres o representantes.</p>
                        <p>6. En caso de que finalmente las restricciones no nos permitieran realizar el plan vacacional, Tecnikids Venezuela reembolsará la diferencia del costo entre ambas modalidades y se participaría en el plan vacacional de manera virtual.</p>
                        <p>En caso de una vez iniciado el Plan Vacacional, el campista decida abandonarlo por cualquier motivo, incluso con la autorización de los padres o tutores, no tendrá derecho a ninguna devolución.</p>
                        <p className="text-dark"><i>LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.</i></p>
                        <p>¡RECUERDA QUE SÓLO HAY CUPOS LIMITADOS!</p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 text-right">
                        <p>Para más información puedes contactarnos:</p>
                        <p><span className="text-blue">Valentina Romero <a className="planilla-link" href="tel:+584122381919">+58 414 923 9837</a></span></p>
                        <p><a className="planilla-link" href="mailto:atencionalclientetk@tecnikidsve.com">atencionalclientetk@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <SeparationLines />
        </div>
    )
}