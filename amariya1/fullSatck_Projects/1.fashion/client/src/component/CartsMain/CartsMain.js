import React from "react";
import "./cartsmain.scss";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

const CartsMain = () => {
  return (
    <>
      <Container className="pt-4 pb-4">
        <h2 className="text-center">Shopping Cart</h2>
        <Row className="mt-5 gap-3 gap-md-0 gap-lg-0">
          <Col lg={8} md={7}>
            <Card className="card">
              <Card.Title>Cart (2 items)</Card.Title>
              <div className="mt-2 store-item bottom-line pb-3">
                <Row>
                  <Col lg={3}>
                    <img src="/logo192.png" alt="" />
                  </Col>
                  <Col lg={9}>
                    <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between ">
                      <h4>NIKE SHOES</h4>
                      <div>
                        <div
                          className="btn-quantity-container d-flex align-align-items-center justify-content-center"
                          style={{ gap: ".5rem" }}
                        >
                          <Button className="btn-quantity" variant="light">
                            &minus;
                          </Button>
                          <span className="p-quantity">3</span>
                          <Button className="btn-quantity" variant="light">
                            +
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="list-store d-flex align-items-center justify-content-between">
                      <p>discount :- 20%</p>
                    </div>
                    <div className="list-store d-flex align-items-center justify-content-between">
                      <p>Price :- 200</p>
                    </div>
                    <div className="list-store d-flex align-items-center justify-content-between">
                      <p>Delivery Date :- Afrte 2 days</p>
                    </div>

                    <div className="list-store d-flex align-items-center justify-content-between">
                      <div className="d-flex gap-2">
                        <Button
                          className="btn-list"
                          variant="danger"
                          size="xsmall"
                        >
                          <i className="fa fa-trash"></i>
                          <span> Remove Item</span>
                        </Button>
                        <Button
                          className="btn-list"
                          variant="secondary"
                          size="xsmall"
                        >
                          <i className="fa fa-heart"></i>
                          <span> Move To Wish List</span>
                        </Button>
                      </div>
                      <div className="d-flex">
                        <h5>Total :- 653986</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* ------------------  */}
              <hr />
            </Card>
          </Col>

          {/* 2nd card */}

          <Col>
            <Card className="card">
              <Card.Title>The total amount of</Card.Title>
              <div className="store-item mt-2">
                <Row>
                  <Col>
                    <div className="list-store d-flex align-items-center justify-content-between">
                      <p>Temporary amount</p>
                      <p>total price :-</p>
                    </div>

                    {/* <div className="list-store d-flex align-items-center justify-content-between">
                          <p>Shipping</p>
                          <p>Gratis</p>
                        </div> */}
                    <div className="bottom-line"></div>
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col className="col-6">
                    <p className="p-total-label">
                      The total amount of (Including VAT)
                    </p>
                  </Col>
                  <Col className="col-6">
                    <p className="p-total">369623</p>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col>
                    <Button
                      className="w-100"
                      variant="primary"
                      size="medium"
                      block
                    >
                      Go To Checkout
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartsMain;
