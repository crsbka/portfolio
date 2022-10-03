import React from "react";
import {FULL_NAME} from "../App";
import '../components/css/Footer.css';


export default function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div className="footer">
            <h6>By {FULL_NAME}</h6>
            <p>{year}</p>
        </div>
    )

}