import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";
import InfoWords from "../components/InfoWords";


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
                            <h2 id="featureTitle">Featured at Michele's</h2>
                            <Row>
                                <Col size={"md-7"}>
                                    <h6>Janome Sewing Machines</h6>
                                    <img id="Janome" src={"https://www.janome.com/siteassets/products/machines/embroidery/mc15000-quilt-maker/mc15k_qm-right.jpg?"} alt={"https://www.janome.com/siteassets/products/machines/embroidery/mc15000-quilt-maker/mc15k_qm-right.jpg?"} />
                                </Col>
                                <Col size={"md-5"}>
                                    <h6>Quilting Fabrics</h6>
                                    <img id="quiltingFabrics" src={"https://images.fabric.com/images/693/693/0580763.jpg"} alt={"https://images.fabric.com/images/693/693/0580763.jpg"} />
                                </Col>
                            </Row>
                            <Row>
                                <Col size={"md-12"}>
                                <h6>Grace Quilting Company 21 inch computerized machine</h6>
                                <img id="graceLongArm" src={"https://www.graceframe.com/frontend/images/qnique21/qnique21-10foot-right-big.png"} alt={"https://www.graceframe.com/frontend/images/qnique21/qnique21-10foot-right-big.png"} />
                                </Col>
                            </Row>
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
                <InfoWords></InfoWords>
            </Container>
        )
    }
}

export default Main;