import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class NewUserInfo extends Component {

    state = {
        username: [],
        password: [],
        current: ""
    }

    componentDidMount = () => {
        let resultArr = []
        API.getAdmin().then(res => {
            console.log(res);
            let result = {};
            result.id=res.data[0]._id;
            resultArr.push(result);
            this.setState({current: resultArr}, () => console.log(this.state.current))
        })
    }

    adminSubmit = event => {
        event.preventDefault();

        API.deleteAdmin(this.state.current[0].id)
        .then(() => console.log("old one gone"))
        .catch(err => console.log(err))

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
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
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

export default NewUserInfo;