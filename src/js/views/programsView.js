import React from 'react';
import '../../styles/index.css';
import { MyNavbar } from '../components/MyNavbar';
import { SeparationLines } from '../components/SeparationLines';
import { MyFooter } from '../components/MyFooter';
import { ProgramsSection } from '../components/ProgramsSection';

export const ProgramsView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <ProgramsSection />
            <SeparationLines />
            <MyFooter />
        </div>
    );
}

