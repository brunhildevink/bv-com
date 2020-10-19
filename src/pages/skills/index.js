import React from 'react';
import './skills.scss';
import { Container, Row, Col } from 'react-bootstrap';

// components
import Card from '../../components/Card'

function Skills() {

    const languages = [
        {
            title: "HTML/CSS",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate.",
        },
        {
            title: "Javascript ES6",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            title: "PHP",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        }
    ]

    const frameworks = [
        {
            title: "React",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            title: "Vue",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
    ]

    const test = [
        {
            title: "Jest",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
        {
            title: "Jasmine",
            text: "Exercitation non eiusmod id reprehenderit deserunt nulla nostrud do duis non veniam eu ea. Exercitation duis cillum eiusmod nulla incididunt culpa qui do proident laboris. Proident ipsum commodo tempor eiusmod duis consequat sunt cupidatat consequat mollit elit elit. Voluptate laboris culpa nulla amet elit ad voluptate."
        },
    ]

    function renderCards(section) {
        return section.map(({title, text, highlight}, idx) => (
            <Col
                sm={6}
                lg={4}
            >
                <Card
                    key={idx}
                    title={title}
                    text={text}
                    highlight={highlight}
                />
            </Col>
        ))
    }

    return (
        <section className="skills">
            <Container>

                <div className="skill-section">
                    <h3>Languages</h3>
                    <Row className="skill-row">
                        { renderCards(languages) }
                    </Row>
                </div>

                <div className="skill-section">
                    <h3>Frameworks</h3>
                    <Row className="skill-row">
                        { renderCards(frameworks) }
                    </Row>
                </div>

                <div className="skill-section">
                    <h3>Testing</h3>
                    <Row className="skill-row">
                        { renderCards(test) }
                    </Row>
                </div>

            </Container>
        </section>
    )
}

export default Skills;
