import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';

export const AerostemView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2">
                    <p className="col-11 col-md-6 justify-text mt-2 mt-md-5">
                        <span className="f-weigth-600">AeroStem</span> es un programa a través del 
                        cual los alumnos tienen la oportunidad de manipular, construir y volar 
                        Drones, de una forma sencilla, atractiva, pero sobretodo segura, ya que 
                        nuestras aeronaves, están especialmente diseñadas para que puedan ser 
                        voladas sin peligro alguno para las personas que se encuentran en los 
                        alrededores. 
                        <br />
                        <br />
                        El pensamiento lógico y la resolución de problemas, serán las principales 
                        cualidades a desarrollar, ya que con esta licencia, los estudiantes adquieren 
                        los conocimientos necesarios para programar las aeronaves, permitiéndoles así 
                        cumplir con distintos desafíos.
                    </p>
                    <div className="col-12 col-md-6 mt-0 mt-md-4">
                        <img src="https://i.ibb.co/9hh4rxc/logo-aerostem.png" className="col-12 p-center" alt="Aerostem" />
                    </div>
                    <div className="row mx-2 mt-0 mt-md-4 mb-0 mb-md-5">
                        <iframe 
                            className="col-11 col-md-6 mx-auto mb-3 mb-md-0"
                            style={{height: '350px'}}
                            title="Stem Video"
                            src="https://www.youtube.com/embed/8tDzZaeP2A0" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        </iframe>
                        <p className="col-11 col-md-5 ml-0 ml-md-5 mt-0 mt-md-4 justify-text">
                            Es necesario destacar que AeroStem cuenta con diversos niveles de dificultad, 
                            dirigidos y enfocados a cada uno de los grados académicos de primaria, 
                            bachillerato y universidad, por lo que constantemente los alumnos tendrán 
                            nuevas experiencias retadoras y adaptadas a su nivel de conocimiento.
                        </p>
                    </div>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}