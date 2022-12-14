import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatar from '../assets/img/user-icon.png'
import {FULL_NAME} from "../App";
import '../components/css/Banner.css';

export default function Banner() {

    return (
        <Container id="home" className="banner">
            <Row>
                <Col className="banner-text">
                    <p>Hi, my name is </p>
                    <h1>{FULL_NAME}</h1>
                    <p>
                        I'm an aspiring
                        <span className="position"> Junior Front-End Developer</span> based in Toronto, Canada, with background in
                        architecture, taking my first steps in front-end development.
                    </p>

                </Col>

                <Col>
                    <img className="banner-avatar" src={avatar} alt="avatar" />
                </Col>
            </Row>
        </Container>
    )
}