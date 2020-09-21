import React from 'react';
import '../../styles/index.css';
import { MyNavbar } from '../components/MyNavbar';
import { SeparationLines } from '../components/SeparationLines';
import { MyFooter } from '../components/MyFooter';

export const ContactosView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <MyFooter />
        </div>
    );
}
