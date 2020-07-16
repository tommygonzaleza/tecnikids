import React from 'react';
import logo from '../../img/logo-3.png';
import facebook from '../../img/facebook-icon-white.png';
import instagram from '../../img/instagram-icon-white.png';
import twitter from '../../img/twitter-icon-white.png';

export const MyFooter = () => {
    return(
        <div className="container-fluid my-footer">
            <div className="row mx-0">
                <div className="col-4 my-2">
                    <img className="my-footer-logo" src={logo} alt="Logo Tecnikids"/>
                </div>
                <div className="col-12 row tc-white">
                     <div className="col-3">
                         <div className="col-12 m-3">
                            <h5 className="">Dirección</h5>
                            <p className="f-weigth-200 f-size-16">
                                4ta Calle 32-79. Zona II, Jardines de Utatlán II, Ciudad
                                de Guatemala, C.A.
                            </p>
                            <h6>Contacto</h6>
                            <p className="f-weigth-200 f-size-16 my-1">+(58) 412 238 1919</p>
                            <p className="f-weigth-200 f-size-16 my-1">atencionalclientetk@tecnikidsve.com</p>
                            <p className="f-weigth-200 f-size-16 my-1">www.tecnikids.com</p>
                         </div>
                     </div>
                     <div className="col-3">
                         <div className="col-12 m-3">
                            <h5>Enlaces Útiles</h5>
                            <a href="/company-view" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Sobre Nosotros</a>
                            <a href="#" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Clases de Informática</a>
                            <a href="#" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Clases de Robótica</a>
                            <a href="#" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Programa de Valores</a>
                            <a href="#" className="f-weigth-200 f-size-16 my-footer-link d-block my-1">Laboratorios</a>
                         </div>
                     </div>
                     <div className="col-3">
                         <div className="col-12 m-3">
                            <h5>Horario de Trabajo</h5>
                            <p className="f-weigth-200 f-size-16 d-inline-block">
                                Lunes a Viernes 
                            </p>
                            <p className="f-weight-600 f-size-16 d-inline-block">: 7:00 a.m. - 4:00 p.m.</p>
                            <p className="f-weigth-200 f-size-16 d-inline-block">
                                Sábado y Domingo
                            </p>
                            <p className="f-weight-600 f-size-16 d-inline-block">: Cerrado</p>
                         </div>
                     </div>
                     <div className="col-3">
                         <div className="col-12 m-3">
                            <h5>Cobertura</h5>
                            <p className="f-weigth-200 f-size-16 my-1">Venezuela</p>
                            <p className="f-weigth-200 f-size-16 my-1">Guatemala</p>
                            <p className="f-weigth-200 f-size-16 my-1">Honduras</p>
                            <p className="f-weigth-200 f-size-16 my-1">El Salvador</p>
                            <p className="f-weigth-200 f-size-16 my-1">Costa Rica</p>
                         </div>
                     </div>
                </div>
                <div className="col-12">
                    <div className="col-2 my-footer-logo mb-3 mt-0 p-0">
                        <img className="col-4 p-2 my-footer-sm-logo my-footer-sm" href="#" src={facebook} alt="Facebook"/>
                        <img className="col-4 p-2 my-footer-sm-logo my-footer-sm" href="#" src={instagram} alt="instagram"/>
                        <img className="col-4 p-2 my-footer-sm-logo my-footer-sm" href="#" src={twitter} alt="twitter"/>
                    </div>
                </div>
            </div>
        </div>
    )
}