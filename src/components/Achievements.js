import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import certificate1 from "../assets/img/SheCodesIntroductionToCoding.png";
import certificate2 from "../assets/img/SheCodesFrontEnd.png";
import certificate3 from "../assets/img/SheCodesReact.png";


export default function Achievements() {
    return (
        <section id="achievements" className="achievements">
            <Container>

                <Row>
                    <Col>
                        <img className="certificate" src={certificate1} alt="certificate" />
                    </Col>

                    <Col>
                        <img className="certificate" src={certificate2} alt="certificate"/>
                    </Col>

                    <Col>
                        <img className="certificate" src={certificate3} alt="certificate"/>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
