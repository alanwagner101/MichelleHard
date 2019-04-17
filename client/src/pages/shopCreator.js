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

class shopCreator extends Component {

    state = {
        prodTypes: [],
        products: []
    }

    componentDidMount = () => {
        API.getProduct().then(res => {
            this.setState({ products: res.data })
        })
    }

    componentDidUpdate = () => {
        API.getProduct().then(res => {
            this.setState({ products: res.data })
        })
    }

    DeleteButton = event => {
        event.preventDefault();
        console.log(event.target);
        API.deleteProduct(event.target.id).then(() => {
            console.log("DELETED!!!")
            this.componentDidUpdate = () => {
                API.getProduct().then(res => {
                    this.setState({ products: res.data })
                })
            }
        })
    }

    FormSubmit = event => {
        event.preventDefault();
        let title = document.getElementById("productTitle").value;
        let prodType = document.getElementById("productTypes").value;
        let price = document.getElementById("productPrice").value;
        let description = document.getElementById("productDescription").value;
        let img = document.getElementById("productImg").value;

        let result = {};

        result.title = title;
        result.prodType = prodType;
        result.price = price;
        result.description = description;
        result.img = img;

        this.setState({ products: result }, () => {
            console.log(this.state);
            API.saveProduct(this.state.products).then(() => {
                console.log("saved!")
                document.getElementById("productTitle").value = "";
                document.getElementById("productTypes").value = "";
                document.getElementById("productPrice").value = "";
                document.getElementById("productDescription").value = "";
                document.getElementById("productImg").value = "";
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
                        <Card className={"productCreatorCard"}>
                            <CardBody>
                                <h3>Create a New Product</h3>
                                <form id="productCreatorForm" action="/action_page.php" method="get">
                                    <input list="productType" name="types" placeholder={"Type of Product"} id="productTypes" />
                                    <datalist id="productType" >
                                        <option value="Class" />
                                        <option value="product" />
                                    </datalist>
                                    <Input type={"text"} placeholder={"Name of Product"} id="productTitle"></Input>
                                    <Input type={"text"} placeholder={"Product Price"} id="productPrice"></Input>
                                    <Input type={"text"} placeholder={"Product Description"} id="productDescription"></Input>
                                    <Input type={"text"} placeholder={"Product Image URL"} id="productImg"></Input>
                                    <FormBtn onClick={this.FormSubmit}>Submit</FormBtn>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-4"}>
                        <Card className={"productList"}>
                            {this.state.products.length ? (
                                <List id={"productListOverflow"}>
                                    {this.state.products.map(product => (
                                        <ListItem key={product._id} className={"mt-2"}>
                                            <Card className="productItem">
                                                <CardBody>
                                                    <Row>
                                                        <Col size={"md-10"}>
                                                            <p>{"Name of Product: " + product.title}</p>
                                                            <p>{"Type of Product: " + product.prodType}</p>
                                                            <p>{"Price: " + product.price}</p>
                                                            <p>{"Description: " + product.description}</p>
                                                            <img className={"productListImg"} src={product.img} alt={product.img} />
                                                        </Col>
                                                        <Col size={"md-2"}>
                                                            <DeleteBtn onClick={this.DeleteButton} id={product._id}></DeleteBtn>
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
            </Container>
        )
    }

}

export default shopCreator;