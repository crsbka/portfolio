import React from "react";
import navIcon3 from "../assets/img/github-logo.svg";
import navIcon2 from "../assets/img/linkedin-logo.svg";
import navIcon1 from "../assets/img/instagram-logo.svg";
import {EMAIL_ADDRESS, GITHUB_URL,LINKEDIN_URL, INSTAGRAM_URL} from "../App";
import '../components/css/Contact.css';



export default function Contact() {

    return (
        <div id="contact" className="contact">
            <div className="contact-button">
                <button onClick={() => window.location = 'mailto:' + EMAIL_ADDRESS}>Let`s get in touch!</button>
            </div>
            <div className="social-icon">
                <a href={GITHUB_URL}><img src={navIcon3} alt="git"/></a>
                <a href={LINKEDIN_URL}><img src={navIcon2} alt="linkedin"/></a>
                <a href={INSTAGRAM_URL}><img src={navIcon1} alt="insta"/></a>
            </div>
        </div>

    )

}