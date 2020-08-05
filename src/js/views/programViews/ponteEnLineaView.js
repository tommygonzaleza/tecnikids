import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { MyFooter } from '../../components/MyFooter';
import { SeparationLines } from '../../components/SeparationLines';
import PonteEnLinea from '../../../img/logo-ponte-en-linea.png';

export const PonteEnLineaView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <div className="container">
                <div className="row">
                    <h2 className="col-4 p-center my-footer-logo">PONTE EN LÍNEA</h2>
                    <div className="row">
                        <p className="col-12 col-md-6 justify-text my-5">
                            Desde Tecnikids Venezuela estamos conscientes de que la seguridad de nuestros 
                            niños y jóvenes es lo mas importante, es por eso que hemos comenzado con 
                            nuestro programa “Ponte en Línea”, una iniciativa que permitirá a los 
                            profesores y alumnos continuar con sus estudios en línea, para seguirse 
                            formando y así adquirir esos conocimientos tan valiosos. “Ponte en Línea” les 
                            permitirá realizar evaluaciones, videoconferencias, presentaciones y 
                            discusiones, desde la seguridad del hogar. Estamos comprometidos con la 
                            educación y por ello les ofrecemos el servicio de capacitación de profesores, 
                            acompañamiento e instalación del servicio completo. 	
                            <br />
                            <br />
                            Con Tecnikids, Transforma tus clases presenciales en lecciones en línea 
                            eficientes. ¡Ahora Mismo! 
                        </p>
                        <div className="col-1"></div>
                        <div className="col-md-5">
                            <img src={PonteEnLinea} className="col-10 p-center" alt="Ponte En Línea" />
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}