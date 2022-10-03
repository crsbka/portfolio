import {Container, Row} from "react-bootstrap";
import certificate1 from "../assets/img/SheCodesIntroductionToCoding.png";
import certificate2 from "../assets/img/SheCodesFrontEnd.png";
import certificate3 from "../assets/img/SheCodesReact.png";
import Achievement from "./Achievement";


export default function Achievements() {

    const certificates = [
        {
            certificate: certificate1
        },
        {
            certificate: certificate2
        },
        {
            certificate: certificate3
        },
    ];


    return (
        <section id="achievements" className="achievements">
            <Container>
                <Row>
                    {
                        certificates.map((it, index) => {
                            return (
                                <Achievement key={index} certificate={it.certificate}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}
