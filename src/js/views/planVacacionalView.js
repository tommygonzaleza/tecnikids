import React from "react";
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';

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
                        <p><strong>Edades:</strong> 3 - 12 años</p>
                        <p><strong>Lugar:</strong> El Cafetal</p>
                        <p><strong>Modalidad:</strong> Semipresencial - Virtual</p>
                    </div>
                </div>
                <div className="row">
                    <img src="https://i.ibb.co/48Yhw7w/Tecnikids-fotos-1.jpg" alt="Kids Playing with Photon" className="w-100 col-12 my-3" />
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h4><span className="text-blue">PROCESO DE INSCRIPCIÓN</span></h4>
                        <br />
                        <p>Pasos a seguir:</p>
                        <p>1. Realice el pago correspondiente a Tecnikids Venezuela (Depósito Bancario o transferencia). Los datos se enviarán luego de ser llenado el formulario.</p>
                        <p>2. Llene el formulario de <span className="text-blue">"Planilla de Inscripción Plan Vacacional 2021"</span>. Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.</p>
                        <p>3. Debe enviar el comprobante de pago al correo <span className="text-blue">atencionalclientetk@gmail.com</span> para culminar con el proceso de inscripción y asegurar el cupo del participante. En el asunto debe colocar "Comprobante de pago" y el nombre del campista (OBLIGATORIO).</p>
                        <p>4. El gasto de cualquier accidente ocurrido, durante el Plan Vacacional, cualquier gasto necesario es responsabilidad de los padres o representantes.</p>
                        <p>5. En caso de que finalmente las restricciones no nos permitieran realizar el plan vacacional de modalidad semipresencial, se cambiará la modalidad a virtual y se devolverá la diferencia.</p>
                        <p>En caso de una vez iniciado el Plan Vacacional, el campista decida abandonarlo por cualquier motivo, incluso con la autorización de los padres o tutores, no tendrá derecho a ninguna devolución.</p>
                        <p className="text-dark"><i>LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.</i></p>
                        <p>¡RECUERDA QUE SÓLO HAY CUPOS LIMITADOS!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <p>Para más información puedes contactarnos:</p>
                        <p><span className="text-blue">Valentina Romero +58 414 923 9837</span></p>
                        <p><span className="text-blue">atencionalclientetk@gmail.com</span></p>
                    </div>
                </div>
            </div>
            <SeparationLines />
        </div>
    )
}