import React from 'react';
import {AcercaParrafoComponent} from '../components/acerca-parrafo/acerca-parrafo-component';
import {AcercaHabilidadesComponent} from '../components/acerca-habilidades/acerca-habilidades-component';
import './acerca-styles.css';

export function AcercaComponent(){
    return (
        <div className="acerca-container">
            <AcercaParrafoComponent/>
            <AcercaHabilidadesComponent/>
        </div>
    );
}