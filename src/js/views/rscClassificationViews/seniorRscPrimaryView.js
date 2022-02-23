import React from "react";
import { SeparationLines } from "../../components/SeparationLines";


export const seniorRscPrimaryView = () => {


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
                        <img src="https://i.ibb.co/vPyHSYM/Identificativo-etapas-2.png" style={{ width: "100%" }} alt="Primaria Menor" />
                    </div>
                </div>

                <div className="row mt-5 pl-3 pl-md-0">
                    <div className="col">
                        <p>Los participantes deben programar un videojuego en <b><i>Scratch</i></b>. La temática tiene que ser basada en robótica.  Es necesario que se pueda controlar el movimiento del personaje usando las flechas del teclado, botones táctiles o el mouse.</p>

                        <p>La programación tiene que cumplir con las siguientes características:</p>
                        <ol>
                        <li> El personaje principal se puede <b><i>mover a todas las direcciones</i></b> (arriba, abajo, izquierda, derecha)</li>
                        <li>Emplea tres (3) objetos en la programación, al menos uno (1) de ellos debe ser una imagen cargada a Scratch.</li>
                        <li> Cambia de escenario dos (2) veces, uno debe ser un fondo cargado a Scratch.</li>
                        <li>Emplea <b><i>seis (6) bloques de movimiento.</i></b></li>
                        <li>Emplea <b><i>cuatro (4) bloques de apariencia.</i></b></li>
                        <li>Emplea <b><i>dos (2) bloques de sonido.</i></b></li>
                        <li>Emplea <b><i>dos (2) bloques de control, al menos uno debe ser un condicional.</i></b></li>
                        <li>Emplea <b><i>un (1) bloque de sensor.</i></b></li>
                        </ol>
                        <p><b><i>Nota: Mientras más bloques y objetos se programen mejor será la puntuación. La lista mencionada anteriormente es lo mínimo que debe tener el juego. Recuerden ser muy creativos, se pueden usar los objetos, bloques y fondos que deseen.</i></b></p>

                        <p>La programación debe ser entregada en <b><i>formato .sb3</i></b> en la plataforma correspondiente al momento de la inscripción.</p>
                        
                        <div className="text-center mt-5">

                            <h1 className="font-face-nxrg headerText" style={{ color: "#002C56" }}>¡PARTICIPA Y FORMA PARTE DE ESTA GRAN EXPERIENCIA!</h1>

                            <a href="https://forms.gle/Zkx7rNqAU7jobcXY9" rel="noopener noreferrer"><img src="https://i.ibb.co/L5WP9RM/Boton-5.png" width="400px" className="img-fluid" alt="Inscríbete" /></a>
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