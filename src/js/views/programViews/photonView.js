import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';
import photon from '../../../img/aliados/logo-photon-1.jpg';
import { Button } from 'react-bootstrap';

export const PhotonView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-2 my-footer-logo">PHOTON</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            Photon es el robot educativo más moderno del mercado, que permite 
                            a los estudiantes conocer los más importantes avances tecnológicos 
                            del mundo actual. Fue creado para niños entre 5 y 12 años, ofreciendo 
                            diversas herramientas enfocadas a cada etapa de la educación, así como 
                            también para desarrollar la percepción de los niños y sus capacidades.
                            <br />
                            <br />
                            Este es el primer robot interactivo del mundo que crece con su hijo y 
                            que adicionalmente enseña conceptos básicos de codificación, resolución 
                            creativa de problemas, mejorando así el pensamiento lógico.
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5">
                            <img src={photon} className="col-10 p-center" alt="Photon" />
                            <Button className="col-10 col-md-5 mt-3 p-center" variant="primary" href="https://photonrobot.com/for-education/">MÁS INFORMACIÓN</Button>
                        </div>
                            <br />
                            <br />
                        <p className="col-12 justify-text">
                            Sus capacidades están estrictamente relacionadas con el desarrollo de 
                            los niños. Cuando sacamos el robot de la caja, no puede hacer nada; los 
                            niños se convierten en mentores y su trabajo es ayudar a Photon a aprender 
                            todo: cómo moverse, los colores, cómo interactuar con el medio ambiente y 
                            utilizar sus sensores.
                            <br />
                            <br />
                            El photon es aplicable en todas las etapas de la educación, los maestros 
                            podrán adaptarlo perfectamente a sus lecciones de clase, pues gracias a los 
                            programas de Tecnikids,  enseñar a los estudian estudiantes los conceptos 
                            básicos de programación, nunca fue tan sencillo.
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}