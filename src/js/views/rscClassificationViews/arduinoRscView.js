import React from "react";
import { SeparationLines } from "../../components/SeparationLines";


export const arduinoRscView = () => {


    return (
        <>
            <SeparationLines />
            <div className="container">
                <div className="row pl-3 pl-md-0">
                    <div className="col">
                        <div className="text-center">
                        <img src="https://i.imgur.com/JvblMrM.png" width="400px" className="img-fluid" alt="Robotics Science Competition"/>
                        <h1 className="font-face-nxrg headerText">CLASIFICATORIA:</h1>
                        <h2 className="font-face-nxrg">Primer Torneo Intercolegial de Robótica</h2>
                        </div>
                        
                    </div>
                </div>

                <div className="row mt-3 pl-3 pl-md-0">
                    <div className="col-12">
                        <img src="https://i.ibb.co/VBjDycV/Identificativo-etapas-4.png" style={{ width: "100%" }} alt="Bachillerato Arduino" />
                    </div>
                </div>

                <div className="row mt-5 pl-3 pl-md-0">
                    <div className="col">
                        <p>Los participantes deben crear en el <b><i>simulador de Tinkercad</i></b> un circuito funcional que ofrezca solución a un problema de la vida cotidiana o ayude a hacer más fácil alguna actividad diaria.</p>

                        <p>Nota: Los dispositivos empleados en el circuito deben estar conectados a la placa de prueba “Protoboard”.</p>

                        <p>Requisitos del circuito:</p>

                        <ol>
                            <li>Debe ser controlado con una <b><i>placa de Arduino Uno.</i></b></li>
                            <li>Conexiones realizadas en una placa de prueba (Protoboard).</li>
                            <li>Emplea <b>leds.</b></li>
                            <li>Emplea <b>un pulsador.</b></li>
                            <li>Aplica <b>un código funcional.</b></li>
                        </ol>

                        <p style={{ color: "#002C56" }}><i>Nota: Se pueden usar los dispositivos electrónicos que desee el participante y en la cantidad que sea necesaria para cada propuesta. Mientras más creativa sea la solución y más complejo sea el circuito mejor evaluado será el proyecto.</i></p>

                        <p>Se debe entregar:</p>

                        <p>
                            1. <i><b>Captura de pantalla del circuito armado</b></i> en Tinkercad (.png, .jpg o .pdf).
                            <br /><br />
                            <span style={{ color: "#002C56" }}>*Para hacer captura de pantalla pulse el botón PrtScrn o Windows+Shift+S (Windows)  y pulsando al mismo tiempo Mayus+Comando+3 (Mac).</span>

                            <br /><br />
                            2. Un archivo de texto (.txt o .docx), el cual debe contener el código funcional que se programó, una breve descripción del problema y su solución (2 párrafos máximo).
                            <br /><br />

                            El circuito debe ser <i><b>cargado en la plataforma</b></i> correspondiente al momento de inscribirse.
                        </p>
                        <div className="text-center mt-5">

                            <h1 className="font-face-nxrg headerText" style={{ color: "#002C56" }}>¡PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA!</h1>

                            <a href="https://forms.gle/EPGKfKkMPSDoZray5" target="_blank" rel="noopener noreferrer">
                                <img src="https://i.ibb.co/L5WP9RM/Boton-5.png" className="img-fluid" width="400px" alt="Inscríbete" /></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-end">
                    <p className="text-right">
                    <b>Para más información puedes contactarnos:</b>
                    <br/>
                    <a href="tel:+58-412-207-0246">+58 412 207 0246</a>
                    <br/>
                    <a href="mailto:atencionalclientetk@gmail.com">atencionalclientetk@gmail.com</a>
                    </p>
                </div>
            </div>
        </>
    );
};