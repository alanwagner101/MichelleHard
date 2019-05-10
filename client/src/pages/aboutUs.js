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


class About extends Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-2"}>

                    </Col>
                    <Col size={"md-8"}>
                        <Card id="aboutCard">
                            <CardBody>
                                <h2 id="aboutUsTitle">Welcome to Michele's Quilting and Sewing!</h2>
                                <br></br>
                                <p>
                                    Michele’s opened in the fall of 2002  and moved to our current location in 2006.
                                    Michele’s has been servicing Sewing machines and is an authorized Janome dealer.
                                    In 2008 we received our first shipment of Quality Quilting fabrics and have been
                                    adding new fabric and products since. We strive to do everything we can to make
                                    your shopping experience enjoyable.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-2"}>

                    </Col>
                </Row>
                <Row>
                    <Col size={"md-12"}>
                        <img id="divider2" src="./images/divider2.jpg" alt="./images/divider1.png" />
                    </Col>
                </Row>
                <InfoWords></InfoWords>
            </Container>
        )
    }
}

export default About;