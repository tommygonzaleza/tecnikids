import React from 'react';
import date from '../../img/icons/date-white.png';
import school from '../../img/icons/school-white.png';
import student from '../../img/icons/student-white.png';
import teacher from '../../img/icons/teacher-white.png';

export const Stadistics = () => {
    return(
        <div className="container-fluid stadistics">
            <div className="row mx-0">
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src={date} alt="+20 Años" className="stadistics-icon col-12 my-2" />
                    <h2 className="stadistics-title">20</h2>
                    <p className="stadistics-text">Años</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src={school} alt="+210 Colegios" className="stadistics-icon col-12 my-2" />
                    <h2 className="stadistics-title">210</h2>
                    <p className="stadistics-text">Colegios</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src={student} alt="+25.000 Estudiantes" className="stadistics-icon col-12 my-2" />
                    <h2 className="stadistics-title">25000</h2>
                    <p className="stadistics-text">Estudiantes</p>
                </div>
                <div className="col-10 col-md-2 m-3 mx-auto m-md-5">
                    <img src={teacher} alt="+60 Profesores" className="stadistics-icon col-12 my-2" />
                    <h2 className="stadistics-title">60</h2>
                    <p className="stadistics-text">Profesores</p>
                </div>
            </div>
        </div>
    )
}