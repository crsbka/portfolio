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
            description: "Built with HTML, CSS, JavaScript and using Bootstrap Framework. " +
                "Accessing the weather API (OpenWeatherMap) shows the most current weather data anywhere in the globe with changing weather background that corresponds to the current weather.",
            imgUrl: projImg1,
            url: "https://thirsty-visvesvaraya-1786a0.netlify.app/",
        },
        {
            title: "Weather app",
            description: "Built with HTML, CSS, JavaScript and React. " +
                "Accessing the weather API (OpenWeatherMap) shows the most current weather data anywhere in the globe with changing weather background that corresponds to the current weather.",
            imgUrl: projImg2,
            url: "https://epic-raman-ef21cd.netlify.app",
        },
        {
            title: "Dictionary",
            description: "JavaScript",
            imgUrl: projImg3,
            url: "https://vibrant-lamport-662304.netlify.app/",
        },
        {
            title: "To-Do List",
            description: "React",
            imgUrl: projImg4,
            url: "https://visionary-liger-2055a9.netlify.app/",
        },
    ];

    return (
        <section className="project">

            <Container>
                <Row>
                    <Col size={12}>
                        <div>
                            <h2>Projects</h2>

                            <Row>

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

                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}