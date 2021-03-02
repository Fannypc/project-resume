import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {Animated} from 'react-animated-css';

export function TimelineContenidoComponent(){
    return (
        <div className="timeline-container-padre">
            <Animated 
            animationIn="fadeInUp" 
            animationInDuration={1400} 
            isVisible={true} 
            className="acerca-h2">
                EXPERIENCIA
            </Animated>
            <Animated 
            animationIn="fadeInLeft" 
            animationInDuration={1400} 
            isVisible={true} 
            className="timeline-container">
                <div className="timeline-iconos-container">
                    <div className="timeline-icon amarillo">
                        <div className="content-center-white font-1rem">
                            <FontAwesomeIcon icon={faPencilAlt} className="fs-20px"/>
                        </div>
                    </div>
                </div>
                <div className="timeline-content-container">
                    <h2>Desarrolladora web en Everis <span>2019 - presente</span></h2>
                    <p>Tengo casi dos años trabajando en Everis, 
                        he participado en varios proyectos como desarrolladora, 
                        entre los que incluyen lo siguiente: <br/>
                        <ul>
                        <li>Creación y modificación de shell scripts en Bash</li>
                        <li>Modificación de programas en Pro*C con archivos de compilación Makefile</li>
                        <li>Modificación de proyectos web en Spring con JSP, Javascript y CSS</li>
                        </ul>
                    </p>
                </div>
            </Animated>
            <Animated 
            animationIn="fadeInUp" 
            animationInDuration={1400} 
            isVisible={true} 
            className="timeline-container">
                <div className="timeline-iconos-container">
                    <div className="timeline-icon purpura">
                        <div className="content-center-white font-1rem">
                            <FontAwesomeIcon icon={faPencilAlt} className="fs-20px"/>
                        </div>
                    </div>
                </div>
                <div className="timeline-content-container">
                    <h2>Estudiante en Academlo <span>abril 2020 - febrero 2021</span></h2> 
                    <p>Durante los ultimos 10 meses tomé el curso de Desarrollo web full-stack y ciencias de la computación</p>
                </div>
            </Animated>
            <Animated 
            animationIn="fadeInLeft" 
            animationInDuration={1400} 
            isVisible={true} 
            className="timeline-container">
                <div className="timeline-iconos-container">
                    <div className="timeline-icon verde">
                        <div className="content-center-white font-1rem">
                            <FontAwesomeIcon icon={faPencilAlt} className="fs-20px"/>
                        </div>
                    </div>
                </div>
                <div className="timeline-content-container">
                        <h2>Área de QA en Everis <span> junio 2019 - diciembre 2019</span></h2>
                        <p>Realicé pruebas manuales y documentación en distintos proyectos de la empresa</p>
                </div>
            </Animated>
        </div>
    );
}