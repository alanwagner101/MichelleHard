import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class Login extends Component {

    state = {
        username: [],
        password: [],
        data: []
    };

    componentDidMount() {
        let resultArr = [];
        API.getAdmin().then(res => {
            let result = {};
            result.username = res.data[0].username;
            result.password = res.data[0].password;
            console.log(result)

            resultArr.push(result);
            console.log(resultArr)
            this.setState({data: resultArr}, () => console.log(this.state.data[0]));
        })



        
    }

    loginSubmit = event => {
        event.preventDefault();
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        this.setState({username: username, password: password}, () => {
            console.log(this.state);
            if (this.state.username === this.state.data[0].username) {
                if(this.state.password === this.state.data[0].password) {
                        window.location.replace("/admin")
                } else {
                    alert("password is incorrect");
                }
            } else {
                alert("username is incorrect");
            }
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
                                <h1>Login</h1>
                                <form id="adminLoginForm">
                                    <Input type={"text"} placeholder={"Enter Username Here..."} id="username"></Input>
                                    <Input type={"password"} placeholder={"Enter Password Here..."} id="password"></Input>
                                    <FormBtn onClick={this.loginSubmit}>Submit</FormBtn>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-4"}>

                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Login;