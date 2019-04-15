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
            </Container>
        )
    }
}

export default Schedule;