import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../assets/styles/productStyle.css"
// import Photo from "../../assets/img/img1.jpeg";

function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.details}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
