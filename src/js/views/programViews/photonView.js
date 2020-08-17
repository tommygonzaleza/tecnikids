import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';
import photon from '../../../img/aliados/logo-photon-1.jpg';
import button from '../../../img/button.png';

export const PhotonView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2">
                    <p className="col-11 col-md-6 mt-0 mt-md-5 justify-text">
                        <span className="f-weigth-600">Photon</span> es el robot educativo 
                        más moderno del mercado, que permite a los estudiantes conocer los 
                        más importantes avances tecnológicos del mundo actual. Fue creado 
                        para niños entre 5 y 12 años, ofreciendo diversas herramientas 
                        enfocadas a cada etapa de la educación, así como también para 
                        desarrollar la percepción de los niños y sus capacidades.
                        <br />
                        <br />
                        Este es el primer robot interactivo del mundo que crece con su hijo y 
                        que adicionalmente enseña conceptos básicos de codificación, resolución 
                        creativa de problemas, mejorando así el pensamiento lógico.
                    </p>
                    <div className="col-11 col-md-6 center-text">
                        <img src={photon} className="col-12 col-md-8" alt="Photon" />
                        <a className="col-12" href="https://photonrobot.com/for-education/">
                            <img src={button} className="col-9 col-md-7" alt="Button" />
                        </a>
                    </div>
                </div>
                <div className="row mx-2 my-3 my-md-5">
                    <iframe 
                        className="col-11 col-md-6 mx-auto mb-3 mb-md-0"
                        style={{height: '350px'}}
                        title="Photon Video"
                        src="https://www.youtube.com/embed/87J0Gz26NOg" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <p className="col-11 col-md-5 ml-0 ml-md-5 justify-text">
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
            <SeparationLines />
            <MyFooter />
        </div>
    )
}