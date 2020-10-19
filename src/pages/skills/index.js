import React from 'react';
import './skills.scss';
import { Container, Row, Col } from 'react-bootstrap';

// components
import Card from '../../components/Card'

function Skills() {

    const languages = [
        {
            title: "HTML/CSS",
            text: "Advanced",
        },
        {
            title: "Javascript ES6",
            text: "Advanced"
        },
        {
            title: "PHP",
            text: "Medior"
        },
        {
            title: "Python",
            text: "Beginner"
        },
        {
            title: "Node",
            text: "Beginner"
        },
        {
            title: "Java",
            text: "Beginner"
        }
    ]

    const frameworks = [
        {
            title: "React",
            text: "Advanced"
        },
        {
            title: "Vue",
            text: "Medior"
        },
    ]

    const test = [
        {
            title: "Jest",
            text: "Medior"
        },
        {
            title: "Jasmine",
            text: "Beginner"
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
        <section className="skills" id="skills">
            <Container>

                <h2 className="intro-header">Skills</h2>

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
