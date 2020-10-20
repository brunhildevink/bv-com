import React from 'react';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';

// Pages
import Header from './components/Header'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid className="about-background">
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <About />
            </Col>
            <Col lg={6} sm={12}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
