import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatar from '../assets/img/user-icon.jpg'

export default function Banner() {

    return (
        <Container className="banner">
            <Row>
                <Col className="banner-text">
                    <h1>Kristina Laktiushkina</h1>
                    <h2>Front End Developer</h2>
                    <p>
                        I'm an aspiring Front-End Developer based in Canada, taking the first steps in front-end development.
                    </p>

                </Col>

                <Col>
                    <img className="banner-avatar" src={avatar} alt="avatar" />
                </Col>
            </Row>
        </Container>

    )
}