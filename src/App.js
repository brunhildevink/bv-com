import React from 'react';
import './App.scss';

// Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col md={{offset:3}}>
              <h1>
                Brunhilde <br />
                Vink
              </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={3} className="links-container">
                <Col>
                  <img
                    src="https://images.unsplash.com/photo-1553476590-695189b18600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                    className="avatar"
                  />
                </Col>
                <Col className="flex-end">
                  <a href="https://www.linkedin.com/in/brunhilde-vink/">LinkedIn</a>
                  <a href="https://github.com/brunhildevink">GitHub</a>
                  <a href="https://github.com/brunhildevink">Download CV</a>
                </Col>
            </Col>

            <Col>
              <p>I am currently open for new opportunities! Before working as a web developer, I was working as a (motion graphics) designer.</p>

              <p>Aute consequat mollit in dolore eiusmod quis. Exercitation consectetur aliquip mollit dolor voluptate ut nisi deserunt cillum adipisicing amet incididunt velit. Pariatur est proident labore incididunt eiusmod officia culpa nisi quis. Deserunt ex excepteur ex laboris sunt occaecat aliquip dolore. Sunt commodo esse sint aute. Eiusmod anim pariatur reprehenderit ullamco do cillum.</p>

              <p>Proident eiusmod ea quis nulla. Dolor id eu et sit id voluptate consequat. Sit ipsum veniam cillum sunt dolore.</p>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
