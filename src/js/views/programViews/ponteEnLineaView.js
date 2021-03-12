import React from 'react';
import '../../../styles/index.css';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';

export const PonteEnLineaView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row mx-2 mt-2 mt-md-5">
                    <p className="col-11 col-md-6 justify-text">
                        Desde Tecnikids Venezuela estamos conscientes de que la seguridad de nuestros 
                        niños y jóvenes es lo mas importante, es por eso que hemos comenzado con 
                        nuestro programa <span className="f-weigth-600">“Ponte en Línea”</span>, una iniciativa que permitirá a los 
                        profesores y alumnos continuar con sus estudios en línea, para seguirse 
                        formando y así adquirir esos conocimientos tan valiosos. 
                    </p>
                    
                    <div className="col-12 col-md-6">
                        <img src="https://i.ibb.co/B4bxXK1/logo-ponte-en-linea.png" className="col-12 col-md-10 p-center ml-0 ml-md-5" alt="Ponte En Línea" />
                    </div>
                </div>
                <div className="row mx-2 my-2 my-md-5">
                    <iframe 
                        className="col-11 col-md-6 mx-auto mb-3 mb-md-0"
                        style={{height: '300px'}}
                        title="Ponte En Linea Video"
                        src="https://www.youtube.com/embed/i79PvrUM9Dg" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                    <p className="col-11 col-md-5 ml-0 ml-md-5 justify-text">
                        “Ponte en Línea” les 
                        permitirá realizar evaluaciones, videoconferencias, presentaciones y 
                        discusiones, desde la seguridad del hogar. Estamos comprometidos con la 
                        educación y por ello les ofrecemos el servicio de capacitación de profesores, 
                        acompañamiento e instalación del servicio completo. 	
                        <br />
                        <br />
                        Con Tecnikids, Transforma tus clases presenciales en lecciones en línea 
                        eficientes. ¡Ahora Mismo! 
                    </p>
                </div>
            </div>
            <SeparationLines />
            <MyFooter />
        </div>
    )
}