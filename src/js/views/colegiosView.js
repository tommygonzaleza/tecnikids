import React from 'react';
import '../../styles/index.css';
import { MyNavbar } from '../components/MyNavbar';
import { SeparationLines } from '../components/SeparationLines';
import { MyFooter } from '../components/MyFooter';
import { Colegios } from '../components/Colegios';

export const ColegiosView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <Colegios className="my-5"/>
            <SeparationLines />
            <MyFooter />
        </div>
    );
}
