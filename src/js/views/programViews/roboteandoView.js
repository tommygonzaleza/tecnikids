import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';
import button from '../../../img/button.png';
import roboteando from '../../../img/roboteando.png';

export const RoboteandoView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-5">
                    <p className="col-11 col-md-6 ml-2 ml-md-0 justify-text">
                        El programa <span className="f-weigth-600">Roboteando</span> ofrece diferentes niveles de acuerdo con las necesidades 
                        académicas de cada escuela. ROBOTEANDO 1era Etapa está diseñado para principiantes, 
                        por lo que se presentan los temas principales sobre robótica, como las máquinas 
                        simples, que es clave para una mejor comprensión del proceso de operación y 
                        fabricación de un robot. Este programa tiene una versión PLUS, que incluye 
                        materiales adicionales, robots programables y actividades para estos materiales.
                    </p>
                    <div className="col-12 col-md-6 center-text my-4 my-md-0">
                        <img className="col-12 col-md-9 mb-3" src={roboteando} alt="Roboteando"/>
                        <a className="col-12 my-5" href="http://usa.egb4.com/roboteando-primera-etapa">
                            <img src={button} className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div>
                </div>
                <div className="row mx-2 my-3 my-md-5">
                    <iframe 
                        className="col-11 col-md-6 mx-auto"
                        style={{height: '350px'}}
                        title="Stem Video"
                        src="https://www.youtube.com/embed/8WQbfY6PX0c" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}