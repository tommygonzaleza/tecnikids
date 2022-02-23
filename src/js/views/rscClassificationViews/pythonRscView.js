import React from "react";
import { SeparationLines } from "../../components/SeparationLines";


export const pythonRscView = () => {


    return (
        <>
            <SeparationLines />
            <div className="container">
                <div className="row pl-3 pl-md-0">
                    <div className="col">
                        <div className="text-center">
                            <img src="https://i.imgur.com/JvblMrM.png" width="400px" className="img-fluid" alt="Robotics Science Competition" />
                            <h1 className="font-face-nxrg headerText">CLASIFICATORIA:</h1>
                            <h2 className="font-face-nxrg">Primer Torneo Intercolegial de Robótica</h2>
                        </div>

                    </div>
                </div>

                <div className="row mt-3 pl-3 pl-md-0">
                    <div className="col-12">
                        <img src="https://i.ibb.co/kyzWnCT/Identificativo-etapas-3.png" style={{ width: "100%" }} alt="Primaria Menor" />
                    </div>
                </div>

                <div className="row mt-5 pl-3 pl-md-0">
                    <div className="col">
                        <p>Los participantes deben programar en <b><i>Python</i></b>, un juego que tiene que consistir en pedirle al usuario una clave secreta para poder ganar.</p>

                        <p>El código tiene que cumplir con las siguientes características:</p>
                        <ol>
                            <li> El juego a programar debe solicitar al usuario que introduzca su nombre.</li>
                            <li>Imprime en pantalla <b><i>un acertijo o pista</i></b>, para que el usuario pueda adivinar la clave correcta (la clave tiene que ser una sola palabra).</li>
                            <li>Permite al usuario intentar adivinar la palabra 5 veces.</li>
                            <ul style={{listStyleType:"none"}}>
                                <li>- Si en el tercer intento no ha adivinado, imprime en pantalla una <b><i>pista extra.</i></b></li>
                                <li>- Si el usuario adivina la palabra, se imprime un mensaje personalizado de victoria que incluye el nombre del jugador.</li>
                                <li>- Si el usuario falla en el quinto intento, se imprime un mensaje personalizado de derrota que incluye el nombre del jugador.</li>
                            </ul>

                        </ol>
                        <p><b><i>Nota: Los elementos mencionados anteriormente son los requisitos necesarios para la elaboración del juego,  los detalles extra como validación de datos de entrada, comentarios dentro del código, la creatividad en la temática del juego y las pistas empleadas sumarán puntos en la evaluación.</i></b></p>

                        <p>Se debe entregar el código desarrollado en un archivo de texto (.txt),  esto tiene que ser <b><i>cargado en la plataforma correspondiente al momento de realizar la inscripción.</i></b></p>

                        <div className="text-center mt-5">

                            <h1 className="font-face-nxrg headerText" style={{ color: "#002C56" }}>¡PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA!</h1>

                            <a href="https://forms.gle/cfnuXL7XmJEELXi16" target="_blank" rel="noopener noreferrer"> <img src="https://i.ibb.co/L5WP9RM/Boton-5.png" width="400px" className="img-fluid" alt="Inscríbete" /></a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-end">
                    <p className="text-right">
                        <b>Para más información puedes contactarnos:</b>
                        <br />
                        <a href="tel:+58-412-207-0246">+58 412 207 0246</a>
                        <br />
                        <a href="mailto:atencionalclientetk@gmail.com">atencionalclientetk@gmail.com</a>
                    </p>
                </div>
            </div>
        </>
    );
};