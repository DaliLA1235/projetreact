import React from 'react';
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>React Bootstrap Example</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>This is Card 1 content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>This is Card 2 content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>This is Card 3 content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
