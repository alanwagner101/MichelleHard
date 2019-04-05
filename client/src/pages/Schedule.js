import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
// import { Card, CardBody } from "../components/Card";
import CalendarComp from "../components/Calendar"


class Schedule extends Component {

    render() {
        return (
            <Container fluid>
                <div>
                    <h1 id="scheduleTitle">Schedule</h1>
                </div>
                <Row>
                    <CalendarComp></CalendarComp>
                </Row>
            </Container>
        )
    }
}

export default Schedule;