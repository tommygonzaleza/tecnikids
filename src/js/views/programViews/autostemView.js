import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { SeparationLines } from '../../components/SeparationLines';
import { MyFooter } from '../../components/MyFooter';
import autostem from '../../../img/logo-autostem.png';
import { Button } from 'react-bootstrap';

export const AutostemView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">AUTOSTEM</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            AutoStem es un programa en el cual los alumnos aprenden programación 
                            con Phyton, uno de los lenguajes de programación de mayor renombre a 
                            nivel mundial. Para esto, utilizan un automóvil, que básicamente es 
                            una computadora sofisticada sobre ruedas, fabricada con componentes 
                            de alta calidad y repleto de sensores y dispositivos electrónicos que 
                            entusiasman a los niños a aprender y jugar. La cámara a bordo brinda 
                            retroalimentación visual para navegar alrededor de obstáculos.
                            <br />
                            <br />
                            Tecnikids te ofrece la mejor oportunidad, de que tus estudiantes 
                            aprendan de forma divertida, una de las habilidades más importantes y 
                            útiles de la 4ta Revolución Industrial.
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5">
                            <img src={autostem} className="col-10 p-center" />
                            <Button className="col-10 col-md-5 mt-3 p-center" variant="primary" href="https://photonrobot.com/for-education/">MÁS INFORMACIÓN</Button>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}