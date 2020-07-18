import React from 'react';
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
            <MyFooter />
        </div>
    );
}

