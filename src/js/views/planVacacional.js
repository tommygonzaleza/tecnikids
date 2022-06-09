import React from 'react';
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';
import { Carousel } from 'react-bootstrap';

export const planVacacional = () => {
    return (
        <div className="container-fluid">
            <SeparationLines />
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-center">
                        <h1 style={{ color: "#10418a" }}><b>¡CUPOS LIMITADOS!</b></h1>
                        <p>Información general:<br /><br />
                            Fecha: 1 al 26 de agosto 2022<br />
                            Edades: 3 - 12 años.<br />
                            Modalidad: Presencial.<br />
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                        <img src="https://i.ibb.co/N2k9TpH/Logo-PVT2021-copia.png" className="img-fluid" style={{ minWidth: "200px", minHeight: "200px" }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col p-5">
                        <Carousel className="my-carousel">
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/rQBcSk1/IMG-6716copia.jpg"
                                    alt="Plan Vacacional"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/T8wmV8w/IMG-6716-1-copia.jpg"
                                    alt="Plan Vacacional"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/G2M30jF/IMG-6716-1.jpg"
                                    alt="Plan Vacacional"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/jwkZcYb/carousel-image.png"
                                    alt="Plan Vacacional"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/RvxYq3j/carousel-image-2.png"
                                    alt="Plan Vacacional"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/FqZG8QW/carousel-image-3.png"
                                    alt="Plan Vacacional"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="my-carousel-item">
                                <img
                                    className="my-carousel-image d-block w-100"
                                    src="https://i.ibb.co/hLp8LkP/carouse-image-4.png"
                                    alt="Plan Vacacional"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src="https://i.ibb.co/g3dBMcS/MOCKUP-2.png" width="100%" />
                    </div>
                </div>
                <span className="d-flex justify-content-center"><hr className="w-25" /></span>
                <div className="row">
                    <div className="col">
                        <h1 className="display-3 text-center font-weight-bold" style={{ color: "#10418a" }}> EXPERIENCIAS TECNIKIDS </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-xl-6 mb-2">
                        <img src="https://i.ibb.co/vL19zs9/IMG-6557.jpg" width="100%" />
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Programación de robots</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-2">
                        <img src="https://i.ibb.co/z7MMQkY/IMG-4151-1.jpg" width="100%" />
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Armados K'Nex</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-2">
                        <img src="https://i.ibb.co/ctHtMGH/951cf775-aad1-4071-86da-293655622968-copia.jpg" width="100%" />
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Vuelo de drones</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-2">
                        <img src="https://i.ibb.co/7kFMqKr/951cf775-aad1-4071-86da-293655622968.jpg" width="100%" />
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Programación de videojuegos con Scratch!</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-2">
                        <img src="https://i.ibb.co/0MZpWcQ/f6901ca6-6a77-4eee-8eeb-c89990c93631.jpg" width="100%" />
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Impresiones en 3D</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 mb-2">
                        <img src="https://i.ibb.co/5x2nRdp/Sin-t-tulo-1.jpg" width="100%" />
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Actividades recreativas y más sorpresas!</p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-6 col-xl-6 text-center">
                        <i class="bi bi-geo-alt-fill boostrap-icon"></i>
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>Av. El Morao Calle Porlamar, Quinta Juan Pablo II - El Cafetal</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 text-center">
                        <i class="bi bi-telephone-fill boostrap-icon"></i>
                        <p className="font-weight-bold" style={{ color: "#10418a" }}>+58 412 207 0246
                            <br />
                            atencionalclientetk@gmail.com</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h2 className="font-weight-bold" style={{ color: "#10418a" }}>PROCESO DE INSCRIPCIÓN</h2>
                        <p>Pasos a seguir:</p>
                        <p>1. Realice el pago correspondiente a Tecnikids Venezuela (Depósito Bancario o transferencia). Los datos se enviarán luego de ser llenado el formulario.</p>
                        <p>2. Llene el formulario de <a href="https://docs.google.com/forms/d/1w0WxY95xJGQ1ocAFjlpL1WwSgfsngMFtAPiIqXm-jI0/edit?usp=drive_web" target="_blank"><span style={{ color: "#10418a" }}>"Planilla de Inscripción Plan Vacacional 2022".</span></a> Los campos obligatorios están señalados por un asterisco, lo que impide que se continúe con el proceso de inscripción en caso de no contestarlos.</p>
                        <p>3. Debe enviar el comprobante de pago al correo <a href="mailto:atencionalclientetk@gmail.com"><span style={{ color: "#10418a" }}>atencionalclientetk@gmail.com</span></a> para culminar con el proceso de inscripción y asegurar el cupo del participante. En el asunto debe colocar "Comprobante de pago" y el nombre del campista (OBLIGATORIO).</p>
                        <p>4. El gasto de cualquier accidente ocurrido, durante el Plan Vacacional, es responsabilidad de los padres o representantes.</p>
                        <p>5. En caso que por situaciones ajenas no se pueda organizar el plan vacacional se considerará hacerlo de forma virtual.</p>
                        <p>6. Al finalizar el proceso de inscripción, descargar <a href="https://drive.google.com/file/d/1yfkJY27mNADKtJ3XR0GTccTtL_u1t31P/view?usp=sharing" target="_blank"><span style={{ color: "#10418a" }}>Planilla Aceptación de Condiciones"</span></a> e imprimir para llevarla firmada el primer día.</p>

                        <p>En caso de que una vez iniciado el Plan Vacacional, el campista decida abandonarlo por cualquier motivo, incluso con la autorización de los padres o tutores, no tendrá derecho a ninguna devolución.</p>

                        <p>LA INSCRIPCIÓN NO SERÁ CONSIDERADA COMPLETA, HASTA NO CUMPLIR CON TODOS LOS REQUISITOS ANTERIORMENTE SOLICITADOS. LES RECORDAMOS QUE LA INSCRIPCIÓN DEBE ESTAR CANCELADA EN SU TOTALIDAD.</p>
                    </div>
                </div>
            </div>
            <SeparationLines />

        </div>
    );

};