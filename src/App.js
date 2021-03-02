import React from 'react';
import {NavbarComponent} from './components/navbar/navbar-component';
import {TimelineComponent} from './views/timeline/timeline';
import {AcercaComponent} from './views/acerca';
import { IntroduccionComponent } from './views/introduccion/introduccion';
import {Col, Row} from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
        <div>
            <BrowserRouter>
              <Row className="m-0">

              <Col lg={3} className="">
                <NavbarComponent/>
              </Col>

              <Col lg={9} className="p-0">
                <Switch>
                <Route exact path="/">
                  <IntroduccionComponent/>
                </Route>
                <Route path="/acerca" render={() => {
                  return <AcercaComponent/>;
                }
                }/>
                <Route path="/experiencia">
                  <TimelineComponent/>
                </Route>
              </Switch>
              </Col>

              </Row>
            </BrowserRouter>

        </div>
  );
}

export default App;
