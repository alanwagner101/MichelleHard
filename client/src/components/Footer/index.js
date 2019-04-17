import React from "react";
import {Container, Row, Col} from "../Grid";
import {Card, CardBody} from "../Card";
import "./style.css";


function Footer(props) {
    
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sizef={"md-12"}>
                        <Card id="footerCard">
                            <CardBody>
                                <a href="/login"><p>admin login</p></a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;