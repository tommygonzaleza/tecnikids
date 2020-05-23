import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { MyCarousel } from '../components/MyCarousel';
import logo from '../../img/stadistics.png';

export const HomeView = () => {
    return(
        <div>
            <MyNavbar />
            <MyCarousel />
            <img src={logo} className="image-stadistics" alt="stadistics"/>
        </div>
    )
}