import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";


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
                                <h2>Welcome to Michele's Quilting and Sewing!</h2>
                                <br></br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat auctor nunc, id tempus lectus placerat rutrum. Aenean quis euismod massa, non tincidunt arcu. Vestibulum bibendum non eros ut hendrerit. Morbi faucibus, mi quis ultricies hendrerit, enim turpis ullamcorper risus, vitae dictum diam libero vitae arcu. Etiam interdum felis in nisl mattis, porttitor sodales lorem ultrices. Duis sodales neque volutpat, accumsan ex sit amet, convallis lorem. Vestibulum urna leo, feugiat in vehicula non, vulputate scelerisque arcu. Nulla facilisi. Duis feugiat magna eget lorem vulputate mattis. Quisque finibus odio mi, vitae sagittis turpis tincidunt sit amet. Suspendisse vitae lectus volutpat, aliquam sapien sed, sodales magna. Suspendisse metus arcu, tristique non tincidunt sit amet, luctus vel diam. Sed eget ligula quam. Maecenas nec ornare est. Suspendisse potenti. Mauris porta augue sit amet augue fringilla, rutrum porta odio ultricies.

Etiam velit sem, hendrerit quis sem et, malesuada maximus purus. Etiam porta turpis ut laoreet ullamcorper. Suspendisse aliquet aliquam semper. Donec accumsan in erat sed tempus. Aenean eget nulla quis felis egestas maximus vitae nec felis. Vestibulum imperdiet efficitur eleifend. Nulla in varius leo. Nam semper felis vel erat condimentum elementum. Sed quis fermentum ante. Duis sit amet nisl odio. Vestibulum hendrerit est euismod ligula mattis, ultricies commodo ante bibendum.

Nam dictum elementum magna. Suspendisse volutpat ante sed magna eleifend hendrerit. Ut congue ipsum at nunc finibus porttitor. Pellentesque ut tincidunt magna. Phasellus finibus metus ut turpis lobortis tincidunt. Vivamus aliquam, nisl vel congue congue, nibh arcu imperdiet turpis, sed porta augue quam ac libero. Quisque quis arcu at arcu dictum facilisis vel nec arcu.

Quisque ornare quam et mi rutrum, ut feugiat nisl convallis. Nullam aliquam molestie enim, sed scelerisque ligula hendrerit a. Etiam eget dapibus dui. Nam sit amet lobortis sem. Suspendisse tempor egestas ipsum et dictum. Vivamus laoreet nisi non felis hendrerit, a imperdiet turpis viverra. Suspendisse eleifend enim placerat gravida efficitur. Praesent eget nibh in mi fringilla blandit vel a urna. Vestibulum quis elementum felis, ac auctor dui. Donec malesuada velit leo, ut sollicitudin nisi bibendum ac. Nulla est nibh, lacinia sed augue quis, semper molestie quam. Mauris purus urna, interdum id mauris sed, tempor dictum nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus dui purus, ac consequat orci varius nec. Aliquam erat volutpat. Sed erat tortor, feugiat vitae lacus vitae, commodo finibus est.

Phasellus faucibus lacus eget sapien porta, vitae finibus dui scelerisque. Vestibulum lobortis mi elit, eu consequat dui ornare quis. Aenean tincidunt nunc nec imperdiet euismod. Cras pharetra interdum placerat. Morbi id tincidunt elit, nec varius odio. Vivamus vel facilisis ex, vitae ultrices dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vel tortor vehicula, venenatis nisl quis, sagittis erat. Suspendisse justo libero, ullamcorper vitae lorem id, tristique accumsan nunc.</p>
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

export default About;