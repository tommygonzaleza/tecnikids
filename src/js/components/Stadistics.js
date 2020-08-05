import React from 'react';
import date from '../../img/icons/date-white.png';
import school from '../../img/icons/school-white.png';
import student from '../../img/icons/student-white.png';
import teacher from '../../img/icons/teacher-white.png';
import CountUp from 'react-countup';

export const Stadistics = () => {
    return(
        <div className="container-fluid stadistics">
            <div className="row mx-0">
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src={date} alt="+20 Años" className="stadistics-icon col-8 p-center my-2" />
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
                    <img src={school} alt="+210 Colegios" className="stadistics-icon col-8 p-center my-2" />
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
                    <img src={student} alt="+25.000 Estudiantes" className="stadistics-icon col-8 p-center my-2" />
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
                    <img src={teacher} alt="+60 Profesores" className="stadistics-icon col-8 p-center my-2" />
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