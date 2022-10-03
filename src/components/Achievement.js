import {Col, Modal} from "react-bootstrap";
import {useState} from "react";

export default function Achievement(props) {

    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false)
    }

    function handleShow() {
        setShow(true)
    }

    return (
        <Col>
            <img className="certificate" onClick={handleShow} src={props.certificate} alt="certificate"/>

            <Modal className="img-modal" show={show} onHide={handleClose}>
                <img className="opened-certificate" src={props.certificate} alt="certificate"/>
            </Modal>
        </Col>
    );
}