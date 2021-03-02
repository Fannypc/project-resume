import React from 'react';
import {Animated} from 'react-animated-css';

export function IntroduccionContenidoComponent(){
    return (
        <div className="container-introduccion">
            <Animated 
            animationIn="fadeInUp" 
            animationInDuration={1400} 
            isVisible={true} 
            className="container-labels">
                <h2 className="intro-label">¡Hola!</h2>
                <h4 className="intro-label">Soy Stefany Porras</h4>
            </Animated>
        </div>
    );
}