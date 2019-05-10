import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";
import CalendarComp from "../components/Calendar";
import InfoWords from "../components/InfoWords";


class Schedule extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-2"}>
                    </Col>
                    <Col size={"md-8"}>
                        <Card className="colorBoxes"><h5 id="blueWords">= Events<span><Card id="blue"></Card></span></h5></Card>
                        <Card className="colorBoxes"><h5 id="redWords">= Classes<span><Card id="red"></Card></span></h5></Card>
                        <Card className="colorBoxes"><h5 id="greenWords">= Shop Hop<span><Card id="green"></Card></span></h5></Card>
                    </Col>
                    <Col size={"md-2"}>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-2"}>
                    </Col>
                    <Col size={"md-8"}>
                        <div>
                            <h1 id="scheduleTitle">Schedule</h1>
                        </div>
                    </Col>
                    <Col size={"md-2"}>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-2"}>
                    </Col>
                    <Col size={"md-8"}>
                        <h5 id="CallUs">Please Call 507-526-3295 with any questions!</h5>
                    </Col>
                    <Col size={"md-2"}>
                    </Col>
                </Row>
                <Row>
                    <CalendarComp></CalendarComp>
                </Row>
                    <InfoWords></InfoWords>
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