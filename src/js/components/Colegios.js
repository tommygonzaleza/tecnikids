import React from 'react';
import Canigua from '../../img/instituciones/logo-canigua.png';
import LosArcos from '../../img/instituciones/logo-los-arcos.jpg';
import LosCampitos from '../../img/instituciones/logo-los-campitos.png';
import MiTita from '../../img/instituciones/logo-mi-tita.png';
import SimonBolivar from '../../img/instituciones/logo-simon-bolivar.png';
import StepByStep from '../../img/instituciones/logo-step-by-step.png';

export const Colegios = () => {
    return(
        <div className="container">
            <h2 className="col-6">INSTITUCIONES EDUCATIVAS</h2>
            <div className="row w-auto my-3">
                <div className="col-md-1"></div>
                <div className="col-10">
                    <a href="http://www.canigua.com/"><img src={Canigua} alt="Colegio Canigua" className="col-2"/></a>
                    
                    <img src={LosArcos} alt="Colegio Los Arcos" className="col-1" href="https://www.instagram.com/colegiolosarcos/?hl=es-la"/>
                    <img src={LosCampitos} alt="Colegio Los Campitos" className="col-2" href="https://www.colegioloscampitos.com/el_colegio.htm"/>
                    <img src={MiTita} alt="Prescolar Mi Tita" className="col-2" href="https://mititaweb.com/"/>
                    <img src={SimonBolivar} alt="Colegio Simón Bolívar" className="col-2" href="https://colegiosimonbolivar.edu.ve/"/>
                    <img src={StepByStep} alt="Step By Step Kinder" className="col-2" href="https://stepbystepkinder.com/"/>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
    
}