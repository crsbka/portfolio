import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from "../assets/img/instagram-logo.svg";
import navIcon2 from "../assets/img/linkedin-logo.svg";
import navIcon3 from "../assets/img/facebook-logo.svg";



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
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link href="#home"
                                  className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                                  onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills"
                                  className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                                  onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects"
                                  className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                                  onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                                      <div className="social-icon">
                                      <a href="#"><img src={navIcon2} alt="linkedin"/></a>
                                      <a href="#"><img src={navIcon1} alt="insta"/></a>
                                      <a href="#"><img src={navIcon3} alt="fb"/></a>
                                      </div>
                                      <button className="vvd"
                                              onClick={() => console.log("connect")}><span>Contact me</span></button>
                                      </span>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
