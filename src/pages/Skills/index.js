import React from 'react';
import './skills.scss';
import { Container, Row, Col } from 'react-bootstrap';

// components
import Card from '../../components/Card'

function Skills() {

    const languages = [
        {
            title: "HTML/CSS",
        },
        {
            title: "Javascript ES6",
        },
        {
            title: "PHP",
        }
    ]

    const frameworks = [
        {
            title: "React",
        },
        {
            title: "Vue",
        },
    ]

    const test = [
        {
            title: "Jest",
        }
    ]

    function renderCards(section) {
        return section.map(({title, text, highlight}, idx) => (
            <Col
                sm={6}
            >
                <Card
                    key={idx}
                    title={title}
                    highlight={highlight}
                />
            </Col>
        ))
    }

    return (
        <section className="skills" id="skills">
            <Container>

                {/* <h2 className="intro-header">Skills</h2> */}

                <div className="skill-section">
                    <h4>Languages</h4>
                    <Row className="skill-row">
                        { renderCards(languages) }
                    </Row>
                </div>

                <div className="skill-section">
                    <h4>Frameworks</h4>
                    <Row className="skill-row">
                        { renderCards(frameworks) }
                    </Row>
                </div>

                <div className="skill-section">
                    <h4>Testing</h4>
                    <Row className="skill-row">
                        { renderCards(test) }
                    </Row>
                </div>

            </Container>
        </section>
    )
}

export default Skills;
