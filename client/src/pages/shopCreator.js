import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Card, CardBody } from "../components/Card";

class shopCreator extends Component {

    state = {
        prodTypes: [],
        products: []
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
                for ( let m = 0; m < result.length; m++) {
                    if(result[m].prodType.toUpperCase() === temp[l]) {
                        endResult.push(result[m]);
                    }
                }
            }
            this.setState({ products: endResult });
        })
    }

    componentDidMount = () => {
        this.updateProducts();
    }

    componentDidUpdate = () => {
        this.updateProducts();
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
                    <Col size={"md-8"}>
                        <Card className={"productCreatorCard"}>
                            <CardBody>
                                <h3>Create a New Product</h3>
                                <form id="productCreatorForm" action="/action_page.php" method="get">
                                    <Input type={"text"} placeholder={"Name of Product"} id="productTitle"></Input>
                                    <Input type={"text"} placeholder={"Type of Product"} id="productTypes"></Input>
                                    <Input type={"text"} placeholder={"Product Price"} id="productPrice"></Input>
                                    <Input type={"text"} placeholder={"Product Description"} id="productDescription"></Input>
                                    <Input type={"text"} placeholder={"Product Image URL"} id="productImg"></Input>
                                    <FormBtn onClick={this.FormSubmit}>Submit</FormBtn>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col size={"md-2"}>

                    </Col>
                </Row>
                <Row>
                    <Col size={"md-2"}>

                    </Col>
                    <Col size={"md-8"}>
                        <Card className={"productList"}>
                            {this.state.products.length ? (
                                <List id={"productListOverflow"}>
                                    <table id="productTable">
                                        <thead id="productTableHead">
                                            <tr className={"productTableCell"}>
                                                <th className={"productTableCell"}>Name of Product</th>
                                                <th className={"productTableCell"}>Type of Product</th>
                                                <th className={"productTableCell"}>Price</th>
                                                <th className={"productTableCell"}>Description</th>
                                                <th className={"productTableCell"}>Image</th>
                                                <th className={"productTableCell"}>Delete</th>
                                            </tr>
                                        </thead>
                                        {this.state.products.map(product => (
                                            <tbody key={product._id}>
                                                <tr className={"productTableCell"}>
                                                    <td className={"productTableCell"}>{product.title}</td>
                                                    <td className={"productTableCell"}>{product.prodType}</td>
                                                    <td className={"productTableCell"}>{"$" + product.price}</td>
                                                    <td className={"productTableCell"}>{product.description}</td>
                                                    <td className={"productTableCell"}><img className={"productListImg"} src={product.img} alt={product.img} /></td>
                                                    <td className={"productTableCell"}><DeleteBtn onClick={this.DeleteButton} id={product._id}></DeleteBtn></td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
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