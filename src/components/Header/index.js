import React from 'react';
import './header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <header className="header">
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
                        <Col className="flex-end">
                        <a href="https://www.linkedin.com/in/brunhilde-vink/">LinkedIn</a>
                        <a href="https://github.com/brunhildevink">GitHub</a>
                        <a href="https://github.com/brunhildevink">Download CV</a>
                        </Col>
                    </Col>

                    <Col>
                    <p>I am currently open for new opportunities! Before working as a web developer, I was working as a (motion graphics) designer.</p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;