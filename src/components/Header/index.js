import React from 'react';
import './header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import Button from '../../components/Button'

function Header() {
    return (
        <header className="header">
            <Container>
                <Row>
                    <Col>
                    <h1 className="intro-header">
                        Hello, my name's <br />
                        Brunhilde. <br />
                        I'm a web developer.
                    </h1>
                    <Button primary text="contact" />
                    <Button secondary text="download CV" />
                    {/* <p>I am currently open for new opportunities! Before working as a web developer, I was working as a (motion graphics) designer.</p> */}
                    </Col>
                </Row>
                <Button scroll />
            </Container>
        </header>
    );
}

export default Header;