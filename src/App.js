import React from 'react';
import blender1 from './images/blender/Blender1.jpg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Preferences from './components/preferences/preferences';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';


import  'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="wrapper">

      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
           <Dashboard/>
          </Route>
          <Route path="/preferences">
            <Preferences/>
          </Route>
        </Switch>
      </BrowserRouter>
      <div>
        <h1>Welcome to YuppieChef</h1>
        <Container>
          <Row>
            <Col md="auto">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={blender1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div> 
    </div>
  );
}

export default App;
