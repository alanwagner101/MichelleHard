import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class Shop extends Component {

    state = {
        Constant: [],
        displayItems: [],
        prodType: [],
        displayTitle: "All Products"
    }

    updateProducts = () => {
        API.getProduct().then(res => {
            let result = [];
            result = res.data;
            let temp = [];
            let endResult = [];
            for (let i = 0; i < result.length; i++) {
                let isSame;
                isSame = false
                for (let j = 0; j < temp.length; j++) {
                    if (result[i].prodType === temp[j]) {
                        isSame = true
                    }
                }
                if (isSame === false) {
                    temp.push(result[i].prodType);
                }
            }
            for (let k = 0; k < temp.length; k++) {
                temp[k] = temp[k].toUpperCase()
            }
            temp.sort();
            for (let l = 0; l < temp.length; l++) {
                for (let m = 0; m < result.length; m++) {
                    if (result[m].prodType.toUpperCase() === temp[l]) {
                        endResult.push(result[m]);
                    }
                }
            }
            this.setState({ Constant: endResult });
            this.setState({ displayItems: endResult });
            this.setState({ prodType: temp });
            console.log(this.state.displayItems);
            console.log(this.state.prodType);
        }).catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.updateProducts()
    }

    prodTypeButton = event => {
        event.preventDefault();
        console.log(event.target.id);

        this.setState({displayTitle: event.target.id});

        let newDisplay = [];
        for (let i = 0; i < this.state.Constant.length; i++) {
            if (this.state.Constant[i].prodType.toUpperCase() === event.target.id) {
                newDisplay.push(this.state.Constant[i])
            }
        }
        console.log(newDisplay);
        if(newDisplay.length) {
            this.setState({displayItems: newDisplay})
        } else{
            this.setState({ displayItems: this.state.Constant })
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size={"md-12"}>
                        <h1 id="scheduleTitle">Featured Products</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size={"md-1"}>

                    </Col>
                    <Col size={"md-3"}>
                        <Card id="productTypeDisplayCard">
                            <CardBody>
                                <h3 id="sideBarTypes">Product Types</h3>
                                {this.state.prodType.length ? (
                                    <div>
                                        {this.state.prodType.map(prodType => (
                                            <button className="prodTypeButtons" onClick={this.prodTypeButton} id={prodType}>{prodType}</button>
                                        ))}
                                        <button className="prodTypeButtons" onClick={this.prodTypeButton} id={"All Products"}>Display All</button>
                                    </div>
                                ) : (
                                        <div>
                                            <h4>No Product Types To Display</h4>
                                        </div>
                                    )}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-7"}>
                        <Card id="productDisplayCard">
                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col size={"md-12"}>
                                            <h2 className="productDisplayTitle">{this.state.displayTitle}</h2>
                                        </Col>
                                    </Row>
                                    {this.state.displayItems.length ? (
                                        <Row>
                                            {this.state.displayItems.map(item => (
                                                <Col size={"md-4"}>
                                                    <Card className={"itemCards"}>
                                                        <CardBody>
                                                            <h4 className="itemTitle">{item.title}</h4>
                                                            <img className={"itemPics"} src={item.img} alt={item.img} />
                                                            <p>{"$" + item.price}</p>
                                                            <p>{item.description}</p>
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    ) : (
                                            <Row>
                                                <Col size={"md-12"}>
                                                    <h2 className="productDisplayTitle">No Items To Be Displayed</h2>
                                                </Col>
                                            </Row>
                                        )}
                                </Container>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-1"}>

                    </Col>
                </Row>
                <br></br>
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
                <Row>
                    <Col size={"md-12"}>
                        <img id="divider2" src="./images/divider2.jpg" alt="./images/divider1.png" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Shop;
