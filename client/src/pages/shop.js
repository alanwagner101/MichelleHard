import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class Shop extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-1"}>

                    </Col>
                    <Col size={"md-3"}>
                        <Card>
                            <CardBody>
                                <FormBtn>Dummy Button</FormBtn>
                                <FormBtn>Dummy Button</FormBtn>
                                <FormBtn>Dummy Button</FormBtn>
                                <FormBtn>Dummy Button</FormBtn>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-7"}>
                        <Card>
                            <CardBody>
                                <h1>Title</h1>
                                <Container fluid>
                                    <Row>
                                        <Col size={"md-4"}>
                                            <Card>
                                                <h1>Words Words Words</h1>
                                                <p>Lorem Epsum Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                            </Card>
                                        </Col>
                                        <Col size={"md-4"}>
                                            <Card>
                                                <h1>Words Words Words</h1>
                                                <p>Lorem Epsum Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                            </Card>
                                        </Col>
                                        <Col size={"md-4"}>
                                            <Card>
                                                <h1>Words Words Words</h1>
                                                <p>Lorem Epsum Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size={"md-4"}>
                                            <Card>
                                                <h1>Words Words Words</h1>
                                                <p>Lorem Epsum Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                            </Card>
                                        </Col>
                                        <Col size={"md-4"}>
                                            <Card>
                                                <h1>Words Words Words</h1>
                                                <p>Lorem Epsum Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                            </Card>
                                        </Col>
                                        <Col size={"md-4"}>
                                            <Card>
                                                <h1>Words Words Words</h1>
                                                <p>Lorem Epsum Lorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem EpsumLorem Epsum</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-1"}>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Shop;
