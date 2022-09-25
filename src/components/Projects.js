import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

export const Projects = () => {

    const projects = [
        {
            title: "Weather app",
            description: "JavaScript",
            imgUrl: projImg1,
            url: "https://thirsty-visvesvaraya-1786a0.netlify.app/",
        },
        {
            title: "Weather app",
            description: "React",
            imgUrl: projImg2,
            url: "https://thirsty-visvesvaraya-1786a0.netlify.app/",
        },
        {
            title: "Dictionary",
            description: "JavaScript",
            imgUrl: projImg3,
            url: "https://thirsty-visvesvaraya-1786a0.netlify.app/",
        },
        {
            title: "To-Do List",
            description: "React",
            imgUrl: projImg4,
            url: "https://thirsty-visvesvaraya-1786a0.netlify.app/",
        },
    ];

    return (
        <section className="project">

            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projects</h2>
                            <p>There are my projects</p>
                            <Row>
                                <Col size={6}>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}