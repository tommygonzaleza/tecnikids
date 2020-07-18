import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import arduino from '../../../img/logo-arduino.png';
import { Button } from 'react-bootstrap';

export const ArduinoView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">ARDUINO</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            Los programas de clase Arduino Education progresan a los estudiantes a 
                            través de STEAM desde la escuela intermedia hasta la universidad, 
                            aumentando su complejidad para desafiarlos a medida que desarrollan sus 
                            habilidades.
                            <br />
                            <br />
                            Todos los programas incluyen una gama de productos electrónicos como 
                            tableros programables, sensores, piezas mecánicas, software simple de 
                            código abierto, contenido en línea para estudiantes y capacitación guiada 
                            y apoyo para educadores.
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5 mt-5">
                            <img src={arduino} className="col-8 p-center mt-2" alt="Arduino" />
                            <Button className="col-10 col-md-5 mt-5 p-center" variant="primary" href="https://www.arduino.cc/education">MÁS INFORMACIÓN</Button>
                        </div>
                        <p className="col-12 justify-text">
                            Los productos con los que aprenden los estudiantes son los mismos que los 
                            utilizados profesionalmente en empresas de todo el mundo, en aplicaciones 
                            como creación rápida de prototipos, IA, tecnología de drones y aprendizaje 
                            automático.
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}