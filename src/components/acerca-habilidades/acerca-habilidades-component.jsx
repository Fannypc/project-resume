import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {faSortNumericDown} from '@fortawesome/free-solid-svg-icons';
import {faTerminal} from '@fortawesome/free-solid-svg-icons';
import {Col, Row} from 'react-bootstrap';
import {Animated} from 'react-animated-css';


export function AcercaHabilidadesComponent(){
    return (
        <div className="acerca-container">
            <Animated 
            animationIn="fadeInLeft" 
            animationInDuration={1400} 
            animationInDelay={200}
            isVisible={true} 
            className="acerca-h2">
                ALGUNAS DE MIS HABILIDADES
            </Animated>
            <Row className="m-0 acerca-habilidades-container">
                <Col xs={12} md={4}>
                    <Animated 
                    animationIn="fadeInUp" 
                    animationInDuration={1400} 
                    isVisible={true}  
                    className="div-content-hab border-azul">
                        <div className="hex azul">
                            <span className="content-center-white">
                                <FontAwesomeIcon icon={faCode} className="fs-25px"/>
                            </span>
                        </div>
                        <div className="acerca-hab-contenido">
                            <h2>
                                DESARROLLO WEB
                            </h2>
                            <p>Tengo experiencia desarrollando sitios web con JavaScript,PHP,HTML,CSS</p>
                        </div>            
                    </Animated>
                </Col>
                <Col xs={12} md={4}>
                    <Animated 
                    animationIn="fadeInUp" 
                    animationInDuration={1400} 
                    animationInDelay={200}
                    isVisible={true}  
                    className="div-content-hab border-amarillo">
                        <div className="hex amarillo">
                            <span className="content-center-white">
                                <FontAwesomeIcon icon={faSortNumericDown} className="fs-25px"/>
                            </span>
                        </div>
                        <div className="acerca-hab-contenido">
                            <h2>
                                BASE DE DATOS
                            </h2>
                            <p>He trabajado con bases de datos relacionales MySQL, PostgreSQL y Oracle</p>
                        </div>   
                    </Animated>
                </Col>
                <Col xs={12} md={4}>
                    <Animated 
                    animationIn="fadeInUp" 
                    animationInDuration={1400}
                    animationInDelay={400} 
                    isVisible={true} 
                    className="div-content-hab border-verde">
                        <div className="hex verde">
                            <span className="content-center-white">
                                <FontAwesomeIcon icon={faTerminal} className="fs-25px"/>
                            </span>
                        </div>
                        <div className="acerca-hab-contenido">
                            <h2>
                                SHELL SCRIPTS
                            </h2>
                            <p>Tengo experiencia participando en proyectos con Shell Scripts, JAR y Pro*C</p>
                        </div>   
                    </Animated>
                </Col>
            </Row>
        </div>
    );
}