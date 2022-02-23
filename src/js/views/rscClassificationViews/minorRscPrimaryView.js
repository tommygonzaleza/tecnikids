import React from "react";
import { SeparationLines } from "../../components/SeparationLines";


export const minorRscPrimaryView = () => {


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
                        <img src="https://i.ibb.co/Dg4x62X/Identificativo-etapas.png" style={{ width: "100%" }} alt="Primaria Menor" />
                    </div>
                </div>

                <div className="row mt-5 pl-3 pl-md-0">
                    <div className="col">
                        <p>Los participantes deben realizar una animación corta en <b><i>Scratch</i></b>, en la que se cuente una historia donde dos personajes hablen entre sí sobre un invento tecnológico que pueda aplicarse en la vida cotidiana.</p>

                        <p><b>INSTRUCCIONES:</b></p>

                        <p>La programación tiene que cumplir con las siguientes características:</p>
                        <ol>
                        <li>La animación debe correr por completo presionando un único botón.</li>
                        <li>El tiempo de <b><i>duración de la animación debe ser de diez (10) segundos</i></b> como mínimo.</li>
                        <li>Debe tener <b><i>dos (2) objetos</i></b>, de los cuales uno tiene que ser una imagen cargada a Scratch desde tu dispositivo.</li>
                        <li>Contener al menos dos (2) cambios de escenario, uno de estos fondos debe ser cargado a Scratch desde tu dispositivo.</li>
                        <li>Emplea <b><i>tres (3) bloques de apariencia.</i></b></li>
                        <li>Aplica <b><i>dos (2) bloques de movimiento.</i></b></li>
                        <li>Incorpora <b><i>dos (2) bloques de control.</i></b></li>
                        <li><b><i>Personaliza el disfraz</i></b> de uno de los objetos utilizados.</li>
                        <li>Después de cierto tiempo de iniciar la animación, uno de los personajes <b><i>debe aparecer en escena.</i></b></li>
                        </ol>
                        <p><b><i>Nota: La lista mencionada anteriormente incluye los requisitos mínimos que debe tener la animación. Mientras más bloques y objetos se programen, mayor será la puntuación.  Recuerden ser muy creativos en la historia que animen, se pueden usar los objetos, bloques y fondos que deseen.</i></b></p>


                        <div className="text-center mt-5">

                            <h1 className="font-face-nxrg headerText" style={{ color: "#002C56" }}>¡PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA!</h1>

                            <a href="https://forms.gle/6Z97BawaihPM8cT8A" target="_blank" rel="noopener noreferrer"><img src="https://i.ibb.co/L5WP9RM/Boton-5.png" width="400px" className="img-fluid" alt="Inscríbete" /></a>
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