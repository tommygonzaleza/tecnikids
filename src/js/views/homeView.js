import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyCarousel } from '../components/MyCarousel';
import { Programs } from '../components/Programs';
import { Stadistics } from '../components/Stadistics';

export const HomeView = () => {
    return(
        <div>
            <MyNavbar />
            <MyCarousel />
            <Stadistics />
            <Programs />
        </div>
    )
}