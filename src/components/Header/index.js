import React from 'react';
import './header.scss';
import { Container, Row, Col } from 'react-bootstrap';

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
                        <Button primary anchor="#contact" text="contact" />
                        <Button secondary download="../../../public/CV-brunhilde.pdf" text="download CV" />
                    </Col>
                </Row>
                <Button scroll />
            </Container>
        </header>
    );
}

export default Header;