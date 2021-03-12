import React from 'react';
import CountUp from 'react-countup';

export const Stadistics = () => {
    return(
        <div className="container-fluid stadistics">
            <div className="row mx-0">
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/dWzpQLp/date-white.png" alt="+20 Años" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title"
                            delay={4}
                            end={20}
                            duration={7}
                        />
                    </div>
                    <p className="stadistics-text">Años</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/SmzvVdF/school-white.png" alt="+210 Colegios" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title"
                            delay={4}
                            end={210}
                            duration={7}
                        />
                    </div>
                    
                    <p className="stadistics-text">Colegios</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/fDMLMtm/student-white.png" alt="+25.000 Estudiantes" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title"
                            delay={4}
                            end={25000}
                            duration={7}
                        />
                    </div>
                    
                    <p className="stadistics-text">Estudiantes</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src="https://i.ibb.co/dJr02K8/teacher-white.png" alt="+60 Profesores" className="stadistics-icon col-8 p-center my-2" />
                    <div className="col-12 center-text">
                        <CountUp
                            className="stadistics-title"
                            delay={4}
                            end={60}
                            duration={7}
                        />
                    </div>
                    
                    <p className="stadistics-text">Profesores</p>
                </div>
            </div>
        </div>
    )
}