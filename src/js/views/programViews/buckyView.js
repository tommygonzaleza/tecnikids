import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import bucky from '../../../img/logo-bucky.png';
import { Button } from 'react-bootstrap';

export const BuckyView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">BUCKY</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            La nueva versión de Bucky, el juguete educativo con el que los niños 
                            aprenden bases de robótica, programación y el internet de las cosas 
                            (IoT), diseñado para ser fácil de usar, con poca infraestructura, con 
                            una forma mejorada y más capacidades.
                            <br />
                            <br />
                            Permite el desarrollo de pensamiento computacional y matemático, así 
                            como de habilidades maker y de resolución de problemas de una manera 
                            divertida.
                            <br />
                            <br />
                            Bucky se programa desde una app con un lenguaje de programación visual. 
                            Con él, los niños pueden combinar sensores y actuadores de Bucky con los 
                            de la tableta o celular, con funciones del Internet de las cosas, así 
                            como con operaciones matemáticas y lógicas.
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5 mt-5">
                            <img src={bucky} className="col-9 p-center mt-1" alt="Bucky" />
                            <Button className="col-10 col-md-5 mt-5 p-center" variant="primary" href="https://www.bucky.com.mx/">MÁS INFORMACIÓN</Button>
                        </div>
                        <p className="col-12 justify-text">
                            La app se conecta a Bucky vía Bluetooth (BLE) y a Internet con WiFi, con 
                            lo que se puede conectar a más de 600 servicios web como redes sociales, 
                            el pronóstico del clima, luces inteligentes o asistentes virtuales.
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}