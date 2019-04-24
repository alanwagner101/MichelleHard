import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";
import CalendarComp from "../components/Calendar"


class Schedule extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-4"}>
                        <h5 id="blueWords">= Events</h5>
                        <Card id="blue">
                        </Card>
                        <h5 id="redWords">= Classes</h5>
                        <Card id="red">
                        </Card>
                    </Col>
                    <Col size={"md-4"}>
                        <div>
                            <h1 id="scheduleTitle">Schedule</h1>
                        </div>
                    </Col>
                    <Col size={"md-4"}>
                        <h5 id="CallUs">Please Call 507-526-3295 with any questions!</h5>
                    </Col>
                </Row>
                <Row>
                    <CalendarComp></CalendarComp>
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
                <Row>
                    <Col size={"md-12"}>
                        <img id="divider2" src="./images/divider2.jpg" alt="./images/divider1.png" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Schedule;