import React from 'react';
import { MyNavbar } from '../components/MyNavbar';
import { SeparationLines } from '../components/SeparationLines';
import { MyFooter } from '../components/MyFooter';

export const EventosView = () => {
    return(
        <div>
            <MyNavbar />
            <SeparationLines />
            <h2>Próximos Eventos</h2>
            <MyFooter />
        </div>
    );
}
