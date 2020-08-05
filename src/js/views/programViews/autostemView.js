import React from 'react';
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
                <div className="row">
                    <h2 className="col-7 col-md-2 my-footer-logo">AUTOSTEM</h2>
                    <div className="row mx-2">
                        <p className="col-11 col-md-6 ml-4 ml-md-0 mt-0 mt-md-4 justify-text">
                            AutoStem es un programa en el cual los alumnos aprenden programación 
                            con Phyton, uno de los lenguajes de programación de mayor renombre a 
                            nivel mundial. Para esto, utilizan un automóvil, que básicamente es 
                            una computadora sofisticada sobre ruedas, fabricada con componentes 
                            de alta calidad y repleto de sensores y dispositivos electrónicos que 
                            entusiasman a los niños a aprender y jugar. La cámara a bordo brinda 
                            retroalimentación visual para navegar alrededor de obstáculos.
                        </p>
                        <div className="col-11 col-md-6 mb-0 mt-0 mt-md-4">
                            <img src={autostem} className="col-12 col-md-10 p-center" alt="Autostem" />
                        </div>
                        <p className="col-11 col-md-12 ml-4 ml-md-0 justify-text">
                            Tecnikids te ofrece la mejor oportunidad, de que tus estudiantes 
                            aprendan de forma divertida, una de las habilidades más importantes y 
                            útiles de la 4ta Revolución Industrial.
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}