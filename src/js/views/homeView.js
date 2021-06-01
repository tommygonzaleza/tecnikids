import React from 'react';
import '../../styles/index.css';
import { MyCarousel } from '../components/MyCarousel';
import { Programs } from '../components/Programs';
import { Stadistics } from '../components/Stadistics';
import { Courses } from '../components/Courses';
import { SeparationLines } from '../components/SeparationLines';
import { Aliados } from '../components/Aliados';
import { Colegios } from '../components/Colegios';

export const HomeView = () => {
    return(
        <div className="m-0 p-0">
            <MyCarousel />
            <Stadistics className="mb-0"/>
            <SeparationLines />
            <Programs />
            <SeparationLines />
            <Courses />
            <SeparationLines />
            <Aliados />
            <SeparationLines />
            <Colegios />
            <SeparationLines />
        </div>
    )
}