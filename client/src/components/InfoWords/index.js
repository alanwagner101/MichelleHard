import React from "react";
import { Container, Row, Col } from "../Grid";
import { Card, CardBody } from "../Card"

function InfoWords() {
    return (
        <Row>
            <Col size={"md-12"}>
                <Card id="storeFrontWords">
                    <CardBody>
                        <Container fluid>
                            <Row>
                                <Col size={"md-2"}>
                                </Col>
                                <Col size={"md-3"}>
                                    <h2 className="infoWords">Location</h2>
                                    <h6 className="infoWords">120 N Main St, Blue Earth, MN 56013</h6>
                                </Col>
                                <Col size={"md-2"}>
                                    <h2 className="infoWords">Phone Number</h2>
                                    <h6 className="infoWords">507-526-3295</h6>
                                </Col>
                                <Col size={"md-3"}>
                                    <h2 className="infoWords">Email</h2>
                                    <h6 className="infoWords">michelesewvac@bevcomm.net</h6>
                                </Col>
                                <Col size={"md-2"}>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col size={"md-4"}>
                                </Col>
                                <Col size={"md-4"}>
                                    <h2 className="infoWords">Store Hours</h2>
                                    <h6 className="infoWords">Mon-Wed 9am - 5pm</h6>
                                    <h6 className="infoWords">Thu 9am - 7pm</h6>
                                    <h6 className="infoWords">Fri 9am - 5pm</h6>
                                    <h6 className="infoWords">Sat 9am - 2pm</h6>
                                </Col>
                                <Col size={"md-4"}>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default InfoWords;