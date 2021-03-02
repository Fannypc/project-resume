import React from 'react';
import {Animated} from 'react-animated-css';

export function AcercaParrafoComponent(){
    return (
        <div>
            <Animated 
            animationIn="fadeInLeft" 
            animationInDuration={1400} 
            isVisible={true}  
            className="acerca-h2">
                ¿QUIÉN SOY?
            </Animated>
            <Animated 
            animationIn="fadeInLeft" 
            animationInDuration={1400} 
            isVisible={true}
            className="acerca-parrafo">
                Soy Ingeniera en Software graduada de la Universidad Autónoma de Querétaro, 
                creo firmemente en el poder del conocimiento y por lo tanto me apasiona 
                aprender cosas nuevas.
            </Animated>
        </div>
    );
}