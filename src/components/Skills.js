import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>There are my skills.</p>
                            <Carousel responsive={responsive} infinite={true}
                                      className="owl-carousel owl-theme skill-slider">

                                <div className="item">
                                    <h5>
                                        <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"
                                             alt="html"/>
                                    </h5>
                                </div>

                                <div className="item-css">
                                    <h5>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                                            alt="css"/>
                                    </h5>
                                </div>

                                <div className="item">
                                    <h5>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                            alt="js"/>
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                                            alt="react"/>
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"/>
                                    </h5>
                                </div>
                                <div className="item">
                                    <h5>
                                        <img src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="ts"/>
                                    </h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}