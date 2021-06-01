import React from 'react';
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';
import { Colegios } from '../components/Colegios';

export const ColegiosView = () => {
    return(
        <div>
            <SeparationLines />
            <Colegios className="my-5"/>
            <SeparationLines />
        </div>
    );
}
