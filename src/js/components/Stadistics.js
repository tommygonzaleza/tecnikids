import React from 'react';
import CountUp from 'react-countup';

export const Stadistics = () => {
    return(
        <div className="container-fluid stadistics">
            <div className="row mx-0 blue-bg-color">
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/JCrY15b/iconos-web-10-anos.png" alt="+20 Años" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title font-face-cocogoose"
                            delay={2}
                            end={3}
                            duration={7}
                        />
                    </div>
                    <p className="stadistics-text font-face-cocogoose">Años</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/CHTRjJ7/iconos-web-13-colegios.png" alt="+210 Colegios" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title font-face-cocogoose"
                            delay={2}
                            end={34}
                            duration={7}
                        />
                    </div>
                    
                    <p className="stadistics-text font-face-cocogoose">Colegios</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/FBGWWpx/iconos-web-12-estudiantes.pngg" alt="+25.000 Estudiantes" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title font-face-cocogoose"
                            delay={2}
                            end={15000}
                            duration={7}
                        />
                    </div>
                    
                    <p className="stadistics-text font-face-cocogoose">Estudiantes</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/vk89Bsg/iconos-web-11-estados.png" alt="+60 Profesores" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title font-face-cocogoose"
                            delay={2}
                            end={4}
                            duration={7}
                        />
                    </div>
                    
                    <p className="stadistics-text font-face-cocogoose">Estados</p>
                </div>
            </div>
        </div>
    )
}