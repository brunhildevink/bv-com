import React from 'react';
import './App.css';

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
            <Col xs={2}>
             <a>About me</a>
             <a>About me</a>
             <a>About me</a>
            </Col>

            <Col>
              <h1>
                Brunhilde <br/>
                Vink
              </h1>
              <p>Est tempor enim amet commodo consequat id non ut esse ut elit elit. Dolore veniam ut amet laborum. Dolore consequat mollit ex veniam culpa qui. Quis id in non duis do magna aliquip officia non dolor exercitation Lorem nulla id. Deserunt laborum qui non quis est. Irure dolor Lorem laborum amet magna occaecat anim enim eu dolore sunt.

Aute consequat mollit in dolore eiusmod quis. Exercitation consectetur aliquip mollit dolor voluptate ut nisi deserunt cillum adipisicing amet incididunt velit. Pariatur est proident labore incididunt eiusmod officia culpa nisi quis. Deserunt ex excepteur ex laboris sunt occaecat aliquip dolore. Sunt commodo esse sint aute. Eiusmod anim pariatur reprehenderit ullamco do cillum.

Proident eiusmod ea quis nulla. Dolor id eu et sit id voluptate consequat. Sit ipsum veniam cillum sunt dolore.</p>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
