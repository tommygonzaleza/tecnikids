import React from 'react';
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';

export const AcademiaView = () => {
    return (
        <div>
            <SeparationLines />
            <div className="container">
                <img src="https://i.ibb.co/R9F7T0S/Banner-Academia-TK-1.png" alt="Tecnikids" className="w-100" />
                <img src="https://i.ibb.co/wcP3B1C/para-pagina-web.png" alt="Información" className="w-100" />
                <div className="col-12 my-5 f-weigth-600">
                    <h6 className="text-gray">Costo:</h6>
                    <h6 className="text-gray"><span className="f-weigth-600">Precios de Lanzamiento</span></h6>
                </div>
                <div className="row my-5 text-blue">
                    <div className="col-12 text-center">
                        <img src="https://i.ibb.co/mSdr3Ck/para-pagina-web4.png" alt="Precios" className="w-100" />
                    </div>
                </div>
                <div className="row bottom-border my-3 py-3">
                    <div className="col-10 mx-auto">
                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/8HgiKbLy3jc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h2 className="text-blue text-center">¿Qué esperas para que tu hijo forme parte de nuestro club de robótica?</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://i.ibb.co/dggSRc3/8.jpg" alt="Métodos de Pago" className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 f-weigth-600">
                        <h6 className="text-blue text-center">PROCESO DE INSCRIPCIÓN</h6>
                        <br />
                        <p className="text-center text-gray">Pasos a seguir:</p>
                        <p className="text-justify text-gray">
                            1. Realice el pago correspondiente a Tecnikids Venezuela (Depósito Bancario o transferencia). Los datos se enviarán luego de ser llenado el formulario.
                            <br />
                            2. Llene el formulario de <a className="planilla-link" href="https://docs.google.com/forms/d/1qmLqr-nswoNlPMv5mur-DeZux5MdfNBEyVA_Y7rqwxs/edit" target="_blank" rel="noreferrer">"Planilla de Inscripción Academia Tecnikids - VE 2021"</a>. Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.
                            <br />
                            3. Debe enviar el comprobante de pago al correo <a className="planilla-link" href="mailto:atencionalclientetk@gmail.com">atencionalclientetk@gmail.com</a> para culminar con el proceso de inscripción y asegurar el cupo del estudiante. En el asunto debe colocar "Comprobante de pago" y el nombre del estudiante (OBLIGATORIO).
                            <br />
                            4. Deberá leer y firmar la Planilla de Condiciones Generales para ser entregada en físico en su primer día de clases. <a className="planilla-link" href="https://drive.google.com/file/d/17HmPrca20N6_HxDUvxFQLKouMl2xn-nv/view?usp=sharing" target="_blank" rel="noreferrer">(Descarga Aquí)</a>
                            <br />
                            5. En caso de que finalmente las restricciones no nos permitieran realizar las clases extracurriculares de modalidad presencial, se adaptará la modalidad a virtual hasta que se pueda volver a la presencialidad.
                        </p>
                        <br />
                        <p className="text-justify text-gray">
                            LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.
                        </p>
                    </div>
                        <br />
                        <div className="row">
                            <div className="col-12 text-right">
                                <p>Para más información puedes contactarnos:</p>
                                <p><span className="text-blue">Valentina Romero <a className="planilla-link" href="tel:+584122381919">+58 412 923 9839</a></span></p>
                                <p><a className="planilla-link" href="mailto:atencionalclientetk@tecnikidsve.com" rel="noreferrer">atencionalclientetk@gmail.com</a></p>
                            </div>
                        </div>
                </div>
            </div>
            <SeparationLines />
        </div>
    );
}
