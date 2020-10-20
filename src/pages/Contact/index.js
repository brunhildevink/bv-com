import React from 'react';
import './contact.scss';
import { Container, Row, Col } from 'react-bootstrap';

// components
import Button from '../../components/Button'

function Contact() {
    return (
        <footer className="contact" id="contact">
            <Row>
                <Col>
                    <h3 className="intro-header">Contact</h3>
                </Col>
            </Row>
            <Row className="contact-btn-row">
                <Col lg={12}>
                    <Button secondary sm to="https://www.linkedin.com/in/brunhilde-vink/" text="LinkedIn" />
                    <Button secondary sm to="https://github.com/brunhildevink" text="GitHub" />
                </Col>
                <Col lg={12} style={{paddingTop: "100px"}}>
                    <a href="tel:+31630222952">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.72 2.03C6.63 1.6 1.6 6.63 2.03 12.72 2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12-3.4-.49-6.27 2.45-5.66 5.87.34 1.91 1.83 3.49 3.72 3.94 1.84.43 3.59-.16 4.74-1.33.89 1.22 2.67 1.86 4.3 1.21 1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                        brunhildevink1995@gmail.com
                    </a>
                    <a href="mailto:brunhildevink1995@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.88 5.05c3.18.4 5.67 2.89 6.07 6.07.06.51.49.88.99.88.04 0 .08 0 .12-.01.55-.07.94-.57.87-1.12-.51-4.09-3.72-7.3-7.81-7.81-.55-.06-1.05.33-1.11.88-.07.55.32 1.05.87 1.11zm.38 2.11c-.53-.14-1.08.18-1.22.72s.18 1.08.72 1.22c1.05.27 1.87 1.09 2.15 2.15.12.45.52.75.97.75.08 0 .17-.01.25-.03.53-.14.85-.69.72-1.22-.47-1.77-1.84-3.14-3.59-3.59zm5.97 8.1l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/></svg>
                        +316 30 222 952
                    </a>
                </Col>
            </Row>
        </footer>
    );
}

export default Contact;