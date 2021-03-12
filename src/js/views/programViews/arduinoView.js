import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';

export const ArduinoView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-5">
                    <p className="col-11 col-md-6 justify-text">
                        Los programas de clase <span className="f-weigth-600">Arduino </span> 
                        Education progresan a los estudiantes a través de STEAM desde la 
                        escuela intermedia hasta la universidad, aumentando su complejidad 
                        para desafiarlos a medida que desarrollan sus habilidades.
                    </p>
                    <div className="col-12 col-md-6 my-3 center-text">
                        <img className="col-10 col-md-5 mb-4 mb-md-0" src="https://i.ibb.co/sP9FGXS/logo-arduino.png" alt="Arduino"/>
                    </div>
                </div>
                <div className="row mx-2 mt-2 mt-md-5">
                    <iframe 
                        className="col-11 col-md-6 mb-3 mb-md-0"
                        style={{height: '350px'}}
                        title="Arduino Video"
                        src="https://www.youtube.com/embed/Mg7ReUDauGs" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <p className="col-11 col-md-5 mb-md-3 mb-0 ml-0 ml-md-5 justify-text">
                        Todos los programas incluyen una gama de productos electrónicos como 
                        tableros programables, sensores, piezas mecánicas, software simple de 
                        código abierto, contenido en línea para estudiantes y capacitación guiada 
                        y apoyo para educadores.
                        <br />
                        <br />
                        Los productos con los que aprenden los estudiantes son los mismos que los 
                        utilizados profesionalmente en empresas de todo el mundo, en aplicaciones 
                        como creación rápida de prototipos, IA, tecnología de drones y aprendizaje 
                        automático.
                    </p>
                </div>
                <a className="col-11" href="https://www.arduino.cc/education">
                    <img src="https://i.ibb.co/v4dmnf2/button.png" className="col-9 col-md-3 my-2 my-md-5 p-center" alt="Button" />
                </a>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}