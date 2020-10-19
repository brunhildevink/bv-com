import React from 'react';
import './skills.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// components
import Card from '../../components/Card'

function Skills() {

    const data = [
        {
            header: "Hello im a card",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            header: "Hello im a card",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            header: "Hello im a card",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            header: "Hello im a card",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            header: "Hello im a card",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            header: "Hello im a card",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
    ]

    return (
        <section className="skills">
            <Container>
                <Row>
                    {
                        data.map(({header, text}, idx) => (
                            <Col
                                sm={6}
                                lg={4}
                            >
                                <Card
                                    key={idx}
                                    header={header}
                                    text={text}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Skills;
