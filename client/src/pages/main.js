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
                                    <h1 id="title">Michelle's</h1>
                                    <h5 id="titleHeader">Quilting and Sewing Center</h5>
                                </CardBody>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main;