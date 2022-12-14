import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from "../assets/img/instagram-logo.svg";
import navIcon2 from "../assets/img/linkedin-logo.svg";
import navIcon3 from "../assets/img/github-logo.svg";
import {EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL} from "../App";
import '../components/css/NavBar.css';


export default function NavBar() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">

                    <Nav.Link href="#skills"
                              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                              onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>

                    <Nav.Link href="#projects"
                              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                              onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>

                    <Nav.Link href="#achievements"
                              className={activeLink === "achievements" ? "active navbar-link" : "navbar-link"}
                              onClick={() => onUpdateActiveLink("achievements")}>Achievements</Nav.Link>


                    <Nav.Link href="#contact"
                              className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
                              onClick={() => onUpdateActiveLink("contact")}>Contact</Nav.Link>

                </Nav>

                <span className="navbar-text">
                                      <div className="social-icon">
                                      <a href={GITHUB_URL}><img src={navIcon3} alt="git"/></a>
                                      <a href={LINKEDIN_URL}><img src={navIcon2}
                                                                  alt="linkedin"/></a>
                                      <a href={INSTAGRAM_URL}><img src={navIcon1}
                                                                   alt="instagram"/></a>
                                      </div>

                                      <button
                                              onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>Email Me</button>
                                      </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
