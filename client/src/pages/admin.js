import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class Admin extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <Card id="adminCard">
                            <CardBody>
                                <Row>
                                    <Col size={"md-4"}>
                                        <a href="/eventcreator"><button className="btn adminButtons"><h5 className="infoWords">Create a New Event</h5></button></a>
                                    </Col>
                                    <Col size={"md-4"}>
                                        <a href="/shopcreator"><button className="btn adminButtons"><h5 className="infoWords">Create a Store Item</h5></button></a>
                                    </Col>
                                    <Col size={"md-4"}>
                                        <a href="/newuserinfo"><button className="btn adminButtons"><h5 className="infoWords">Change Username and Password</h5></button></a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Admin;