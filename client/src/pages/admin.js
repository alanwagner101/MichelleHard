import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class Admin extends Component {

    state = {
        username: [],
        password: []
    }

    adminSubmit = event => {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        this.setState({username: username, password: password}, () => {
            console.log(this.state);
            API.saveAdmin(this.state).then(function() {
                console.log("success");
                alert("new username and password saved");
            }).catch(function(err) {
                console.log(err);
            })
        });

    };

    render() {
        return (
            <Container>
            <Row>
                <Col size={"md-4"}>

                </Col>
                <Col size={"md-4"}>
                    <Card id="loginCard">
                        <CardBody>
                            <h1>Create New Username and Password</h1>
                            <form id="adminLoginForm">
                                <Input type={"text"} placeholder={"Enter Username Here..."} id="username"></Input>
                                <Input type={"password"} placeholder={"Enter Password Here..."} id="password"></Input>
                                <FormBtn onClick={this.adminSubmit}>Submit</FormBtn>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
                <Col size={"md-4"}>

                </Col>
            </Row>
        </Container>
        )
    }
}

export default Admin;