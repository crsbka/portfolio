import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatar from '../assets/img/user-icon.png'

export default function Banner() {

    return (
        <Container id="home" className="banner">
            <Row>
                <Col className="banner-text">
                    <p>Hi, my name is </p>
                    <h1>Kristina Laktiushkina</h1>
                    <p>
                        I'm an aspiring
                        <span className="position"> Junior Front-End Developer</span> based in Toronto, Canada, with background in
                        architecture taking the first steps in front-end development.
                    </p>

                </Col>

                <Col>
                    <img className="banner-avatar" src={avatar} alt="avatar" />
                </Col>
            </Row>
        </Container>
    )
}