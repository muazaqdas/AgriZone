import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import "../../assets/styles/formstyle.css";

function OrderForm() {
  return (
    <div id="order" className="">
      <h2 className="display-4 text-align-center">ORDER</h2>
      <div className="form-class text-left">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message for Us</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Store</Form.Label>
              <Form.Control as="select">
                <option>Select Any Store</option>
                <option value="1">Govindpuri</option>
                <option value="2">Shaheen Bagh</option>
                <option value="3">Rohini</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridProduct">
              <Form.Label>Product</Form.Label>
              <Form.Control as="select">
                <option>Select Product</option>
                <option value="1">Fertilizer</option>
                <option value="2">Seed</option>
                <option value="3">Instruments</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Pickup Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default OrderForm;
