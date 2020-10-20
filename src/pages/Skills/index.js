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
        {
            title: "Next.js",
        },
    ]

    const test = [
        {
            title: "Jest",
        }
    ]

    const renderCards = section => {
        return section.map(({title}, idx) => (
            <Col
                sm={6}
                lg={4}
            >
                <Card
                    key={idx}
                    title={title}
                />
            </Col>
        ))
    }

    return (
        <section className="skills" id="skills">

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

        </section>
    )
}

export default Skills;
