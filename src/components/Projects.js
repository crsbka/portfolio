import {Container, Row, Col} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import '../components/css/Projects.css';

export const Projects = () => {

    const projects = [
        {
            title: "Weather app",
            description: "Built with HTML, CSS, JavaScript and using Bootstrap Framework. " +
                "Accessing the weather API (OpenWeatherMap) shows the most current weather data anywhere in the world with changing weather background that corresponds to the current weather. Hosted on Netlfiy.",
            imgUrl: projImg1,
            url: "https://thirsty-visvesvaraya-1786a0.netlify.app/",
        },
        {
            title: "Weather app",
            description: "Built with HTML, CSS, JavaScript and React. " +
                "Accessing the weather API (OpenWeatherMap) shows the most current weather data anywhere in the world as well as display a five days forecast and weather parameters of the searched cities. Hosted on Netlfiy.",
            imgUrl: projImg2,
            url: "https://epic-raman-ef21cd.netlify.app",
        },
        {
            title: "Dictionary",
            description: "An online Dictionary App with real live-data featuring a Search engine, API integration, word definitions, images of the definition, and synonyms. Hosted on Netlfiy.",
            imgUrl: projImg3,
            url: "https://vibrant-lamport-662304.netlify.app/",
        },
        {
            title: "To-Do List",
            description: "An online note-taking service. Built with HTML, CSS, JavaScript and React. Hosted on Netlfiy.",
            imgUrl: projImg4,
            url: "https://visionary-liger-2055a9.netlify.app/",
        },
    ];

    return (
        <section id="projects" className="project">

            <Container>
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
            </Container>

        </section>
    )
}