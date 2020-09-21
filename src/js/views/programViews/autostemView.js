import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import autostem from '../../../img/logo-autostem.png';

export const AutostemView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2">
                    <p className="col-11 col-md-6 mt-2 mt-md-5 justify-text">
                        <span className="f-weigth-600">AutoStem</span> es un programa en el 
                        cual los alumnos aprenden programación con Phyton, uno de los 
                        lenguajes de programación de mayor renombre a nivel mundial. Para 
                        esto, utilizan un automóvil, que básicamente es una computadora 
                        sofisticada sobre ruedas, fabricada con componentes de alta calidad 
                        y repleto de sensores y dispositivos electrónicos que entusiasman a 
                        los niños a aprender y jugar. La cámara a bordo brinda 
                        retroalimentación visual para navegar alrededor de obstáculos.
                    </p>
                    <div className="col-11 col-md-6 mb-0 mt-0 mt-md-4">
                        <img src={autostem} className="col-12 col-md-10 p-center" alt="Autostem" />
                    </div>
                    
                </div>
                <div className="row mx-2 my-3 my-md-5">
                    <iframe 
                        className="col-11 col-md-6 mb-3 mb-md-0"
                        style={{height: '300px'}}
                        title="Autostem Video"
                        src="https://www.youtube.com/embed/jijJJLg-0uo" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <p className="col-11 col-md-5 ml-0 ml-md-5 justify-text">
                        Tecnikids te ofrece la mejor oportunidad, de que tus estudiantes 
                        aprendan de forma divertida, una de las habilidades más importantes y 
                        útiles de la 4ta Revolución Industrial.
                    </p>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}