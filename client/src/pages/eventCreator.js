import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";
import CalendarComp from "../components/Calendar"

class eventCreator extends Component {

    state = {
        event: [],
        events: []
    }

    componentDidMount = () => {
        API.getEvent().then(res => {
            this.setState({ events: res.data })
        })
    }

    componentDidUpdate = () => {
        API.getEvent().then(res => {
            this.setState({ events: res.data })
        })
    }

    DeleteButton = event => {
        event.preventDefault();
        console.log(event.target);
        API.deleteEvent(event.target.id).then(() => {
            console.log("DELETED!!!")
            this.componentDidUpdate = () => {
                API.getEvent().then(res => {
                    this.setState({ events: res.data })
                })
            }
        })
    }

    FormSubmit = event => {
        event.preventDefault();
        let title = document.getElementById("eventTitle").value;
        let type = document.getElementById("eventTypes").value;
        let date = document.getElementById("eventDate").value;

        console.log(title + " // " + type + " // " + date);

        let result = {};

        result.title = title;
        result.start = date;
        result.textColor = "white";
        if (type === "Class") {
            result.backgroundColor = "red";
        } else {
            result.backgroundColor = "blue";
        }
        result.borderColor = "black";
        result.allDay = true;

        this.setState({ event: result }, () => {
            console.log(this.state);
            API.saveEvent(this.state.event).then(() => {
                console.log("saved!")
                document.getElementById("eventTitle").value = "";
                document.getElementById("eventType").value = "";
                document.getElementById("eventDate").value = "";
            });
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-2"}>

                    </Col>
                    <Col size={"md-4"}>
                        <Card className={"eventCreatorCard"}>
                            <CardBody>
                                <h3>Create a New Event</h3>
                                <form id="eventCreatorForm" action="/action_page.php" method="get">
                                    <Input type={"text"} placeholder={"Title of Event"} id="eventTitle"></Input>
                                    <input list="eventType" name="types" placeholder={"Type of Event"} id="eventTypes" />
                                    <datalist id="eventType" >
                                        <option value="Class" />
                                        <option value="Event" />
                                    </datalist>
                                    <input type="date" name="eventDate" id="eventDate" />
                                    <FormBtn onClick={this.FormSubmit}>Submit</FormBtn>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-4"}>
                        <Card className={"eventList"}>
                            {this.state.events.length ? (
                                <List id={"eventListOverflow"}>
                                    {this.state.events.map(event => (
                                        <ListItem key={event._id} className={"mt-2"}>
                                            <Card className="eventItem">
                                                <CardBody>
                                                    <Row>
                                                        <Col size={"md-10"}>
                                                            <p>{"Event Title: " + event.title}</p>
                                                            <p>{"Event Date: " + event.start}</p>
                                                        </Col>
                                                        <Col size={"md-2"}>
                                                            <DeleteBtn onClick={this.DeleteButton} id={event._id}></DeleteBtn>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h1 id="noResults">No Results to Display</h1>
                                )}
                        </Card>
                    </Col>
                    <Col size={"md-2"}>

                    </Col>
                </Row>
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

export default eventCreator;