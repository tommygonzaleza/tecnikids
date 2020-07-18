import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import aerostem from '../../../img/logo-aerostem.png';
import { Button } from 'react-bootstrap';

export const AerostemView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">AEROSTEM</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text mt-5">
                            AeroStem es un programa a través del cual los alumnos tienen la oportunidad 
                            de manipular, construir y volar Drones, de una forma sencilla, atractiva, 
                            pero sobretodo segura, ya que nuestras aeronaves, están especialmente 
                            diseñadas para que puedan ser voladas sin peligro alguno para las personas 
                            que se encuentran en los alrededores. 
                            <br />
                            <br />
                            El pensamiento lógico y la resolución de problemas, serán las principales 
                            cualidades a desarrollar, ya que con esta licencia, los estudiantes adquieren 
                            los conocimientos necesarios para programar las aeronaves, permitiéndoles así 
                            cumplir con distintos desafíos.
                        </p>
                        <br />
                        <br />
                        <div className="col-1"></div>
                        <div className="col-md-5 mt-5">
                            <img src={aerostem} className="col-10 p-center mt-3" alt="Aerostem" />
                            <Button className="col-10 col-md-5 mt-3 p-center" variant="primary" href="https://photonrobot.com/for-education/">MÁS INFORMACIÓN</Button>
                        </div>
                        <p className="col-12 justify-text">
                            Es necesario destacar que AeroStem cuenta con diversos niveles de dificultad, 
                            dirigidos y enfocados a cada uno de los grados académicos de primaria, 
                            bachillerato y universidad, por lo que constantemente los alumnos tendrán 
                            nuevas experiencias retadoras y adaptadas a su nivel de conocimiento.
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}