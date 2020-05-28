import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyCarousel } from '../components/MyCarousel';
import { Programs } from '../components/Programs';
import { Stadistics } from '../components/Stadistics';
import { Courses } from '../components/Courses';
import { SeparationLines } from '../components/SeparationLines';

export const HomeView = () => {
    return(
        <div className="m-0 p-0">
            <MyNavbar />
            <MyCarousel />
            <Stadistics />
            <SeparationLines />
            <Programs />
            <SeparationLines />
            <Courses />
            <SeparationLines />
        </div>
    )
}