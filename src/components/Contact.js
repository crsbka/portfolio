import React from "react";
import navIcon3 from "../assets/img/github-logo.svg";
import navIcon2 from "../assets/img/linkedin-logo.svg";
import navIcon1 from "../assets/img/instagram-logo.svg";


export default function Contact() {

    return (
        <div className="contact">
            <div className="contact-button">
                <button onClick={() => window.location = 'mailto:crsbka@bk.ru'}>Let`s get in touch!</button>
            </div>
            <div className="social-icon">
                <a href="https://github.com/crsbka"><img src={navIcon3} alt="git"/></a>
                <a href="https://www.linkedin.com/in/kristina-laktiushkina/"><img src={navIcon2} alt="linkedin"/></a>
                <a href="https://www.instagram.com/crsbka/?hl=en"><img src={navIcon1} alt="insta"/></a>
            </div>
        </div>

    )

}