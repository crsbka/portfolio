import React from "react";
import {FULL_NAME} from "../App";

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