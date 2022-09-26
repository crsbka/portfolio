import React from "react";

export default function Footer() {

    const name = "Kristina Laktiushkina";
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div className="footer">
            <h6>Created by {name}</h6>
            <p>{year}</p>
        </div>
    )

}