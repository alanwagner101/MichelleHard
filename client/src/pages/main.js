import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";


class Main extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Card id="mainCard">
                            <Card id="mainOverlayCard">
                                <CardBody id="mainWordBox">
                                    <h1 id="title">Michele's</h1>
                                    <h5 id="titleHeader">Quilting and Sewing Center</h5>
                                    <img id="divider1" src="./images/divider1.png" alt="./images/divider1.png" />
                                </CardBody>
                                <CardBody>
                                    <Container>
                                        <Row>
                                            <Col size={"md-3"}>
                                            </Col>
                                            <Col size={"md-2"}>
                                                <a href="/schedule"><button className="titleButtons"><h5 className="infoWords">Event Schedule</h5></button></a>
                                            </Col>
                                            <Col size={"md-2"}>
                                                <a href="/shop"><button className="titleButtons"><h5 className="infoWords">Shop Now</h5></button></a>
                                            </Col>
                                            <Col size={"md-2"}>
                                                <a href="/about"><button className="titleButtons"><h5 className="infoWords">About Us</h5></button></a>
                                            </Col>
                                            <Col size={"md-3"}>
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardBody>
                            </Card>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-12"}>
                        <img id="divider2" src="./images/divider2.jpg" alt="./images/divider1.png" />
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-3"}>
                    </Col>
                    <Col size={"md-6"}>
                        <Card id="featuresCard">
                        </Card>
                    </Col>
                    <Col size={"md-3"}>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-12"}>
                        <img id="divider2" src="./images/divider2.jpg" alt="./images/divider1.png" />
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-3"}>
                    </Col>
                    <Col size={"md-6"}>
                        <Card id="storeFrontCard">
                        </Card>
                    </Col>
                    <Col size={"md-3"}>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-12"}>
                        <Card id="storeFrontWords">
                            <CardBody>
                                <Container fluid>
                                    <Row>
                                        <Col size={"md-3"}>
                                        </Col>
                                        <Col size={"md-2"}>
                                            <h2 className="infoWords">Location</h2>
                                            <h5 className="infoWords">120 N Main St, Blue Earth, MN 56013</h5>
                                        </Col>
                                        <Col size={"md-2"}>
                                            <h2 className="infoWords">Phone Number</h2>
                                            <h5 className="infoWords">507-526-3295</h5>
                                        </Col>
                                        <Col size={"md-2"}>
                                            <h2 className="infoWords">Email</h2>
                                            <h5 className="infoWords">michelesewvac@bevcomm.net</h5>
                                        </Col>
                                        <Col size={"md-3"}>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main;