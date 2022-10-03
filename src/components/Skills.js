import React from "react";
import {Container} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo1 from '../assets/img/logo_items/HTML5_logo.png';
import logo2 from '../assets/img/logo_items/CSS3_logo.png';
import logo3 from '../assets/img/logo_items/JavaScript-logo.png';
import logo4 from '../assets/img/logo_items/React-logo.png';
import logo5 from '../assets/img/logo_items/Bootstrap_logo.png';
import logo6 from '../assets/img/logo_items/github_logo.png'
import '../components/css/Skills.css';


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const logos = [
        {
            img: logo1,
            alt: "html",
        },
        {
            img: logo2,
            alt: "css",
        },
        {
            img: logo3,
            alt: "js",
        },
        {
            img: logo4,
            alt: "react",
        },
        {
            img: logo5,
            alt: "bootstrap",
        },
        {
            img: logo6,
            alt: "github",
        },
    ];

    return (
        <section id="skills" className="skill">
            <Container className="skill-bx">
                    <h2>Skills</h2>
                    <Carousel className="carousel" responsive={responsive} infinite={true}>
                        {
                            logos.map((logo, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <img className="skill-item-img" src={logo.img}
                                             alt={logo.alt}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
            </Container>
        </section>
    )
}