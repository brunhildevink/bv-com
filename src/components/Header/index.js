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
                    <Col className="header-container">
                        <a className="social-link" href="https://github.com/brunhildevink">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M37.3 10.2c-1.8-3.1-4.2-5.6-7.3-7.5C27 .9 23.6 0 20 0c-3.6 0-7 .9-10 2.7C6.9 4.5 4.5 7 2.7 10.2.9 13.4 0 16.8 0 20.5 0 25 1.3 29 3.8 32.6c2.5 3.6 5.8 6 9.9 7.4.5.1.8 0 1-.2.2-.2.3-.5.3-.8v-1.4-2.4l-.6.1c-.4.1-.9.1-1.4.1-.6 0-1.2-.1-1.8-.2-.6-.1-1.2-.4-1.7-.8s-.9-1-1.1-1.6l-.4-.7c-.2-.4-.4-.9-.8-1.4-.4-.5-.8-.8-1.1-1l-.2-.1-.3-.3c-.1-.1-.2-.2-.2-.4-.1-.1 0-.2.1-.3s.4-.1.8-.1l.5.1c.3.1.8.3 1.3.6.5.4.9.8 1.3 1.4.4.7.9 1.3 1.4 1.7.6.4 1.1.6 1.7.6s1.1 0 1.5-.1c.4-.1.8-.2 1.2-.4.2-1.2.6-2.1 1.3-2.7-1-.1-1.9-.3-2.7-.5-.8-.2-1.6-.6-2.4-1-.8-.5-1.5-1.1-2.1-1.8-.6-.7-1-1.6-1.4-2.8-.4-1.2-.5-2.5-.5-4 0-2.2.7-4 2.1-5.5-.6-1.6-.6-3.4.2-5.4.5-.2 1.3 0 2.2.4 1 .4 1.7.7 2.2 1 .5.3.8.5 1.1.7 1.6-.5 3.3-.7 5-.7 1.7 0 3.4.2 5 .7l1-.6c.7-.4 1.5-.8 2.4-1.2.9-.4 1.6-.5 2.1-.3.8 2 .9 3.8.2 5.4 1.4 1.5 2.1 3.3 2.1 5.5 0 1.5-.2 2.9-.5 4-.4 1.2-.8 2.1-1.4 2.8-.6.7-1.3 1.3-2.1 1.8s-1.7.8-2.4 1c-.8.2-1.7.4-2.7.5.9.8 1.4 2.1 1.4 3.8V39c0 .3.1.6.3.8.2.2.6.3 1 .2 4-1.4 7.3-3.8 9.9-7.4C38.7 29 40 25 40 20.5c0-3.7-.9-7.1-2.7-10.3z"/></svg>
                        </a>
                        <a className="social-link" href="https://www.linkedin.com/in/brunhilde-vink/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M40 40V25.3c0-7.2-1.5-12.7-9.9-12.7-4 0-6.7 2.2-7.8 4.3h-.1v-3.6h-8V40h8.3V26.8c0-3.5.7-6.8 5-6.8 4.2 0 4.3 4 4.3 7.1v13L40 40zM.7 13.3H9V40H.7V13.3zM4.8 0C2.2 0 0 2.2 0 4.8s2.2 4.8 4.8 4.8 4.8-2.2 4.8-4.8C9.6 2.2 7.5 0 4.8 0z"/></svg>
                        </a>
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