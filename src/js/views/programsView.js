import React from 'react';
import '../../styles/index.css';
import { SeparationLines } from '../components/SeparationLines';
import { ProgramsSection } from '../components/ProgramsSection';

export const ProgramsView = () => {
    return(
        <div>
            <SeparationLines />
            <ProgramsSection />
            <SeparationLines />
        </div>
    );
}

