import { useState } from "react";
import React from "react";

import "./productsmain.scss";
import Select from 'react-select'
import { Form } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
const ProductDetailsMain = () => {
  //  for modals
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' }
  ]
  return (
    <>
      <div className="cart_section">
        <h2 className="text-center">Product Details</h2>
        <div className="cart_container">
          <div className="left_cart">
            <img src="/logo192.png" alt="" />
          </div>

          <div className="right_cart">
            <h3>Nike shoes</h3>
            <div className="reviewicon">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>

              <span>&nbsp;3&nbsp;Rating</span>
            </div>
            <p className="mrp">M.R.P : ₹ 400 </p>
            <div className="discount_box">
              <h4 style={{ color: "#111" }}> Disocunt : 20 %</h4>
              <p>
                Items left : <span style={{ color: "#B12704" }}>3</span>
              </p>
              <h4>
                FREE DELEIVERY :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Nov-10-15
                </span>
                Details
              </h4>
              <p>
                fastest Delivery{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Iteam :{" "}
              <span
                style={{
                  color: "#565959",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.4px",
                }}
              >
                Lorems sdhfskjdb skdfhksdhfksndf suidhfiwshdw
              </span>
            </p>
            {/*  add to cart */}

            <div className="addtocart">
              <Button className="btn mt-3 addcartbtn" variant="dark">
                Add To Cart
              </Button>
            </div>
          </div>
        </div>

        {/*  review code  */}
        <div className="container" style={{ width: "100%" }}>
          <div className=" d-flex justify-content-between">
            <h3>Customer Review</h3>
            <Button className="btn btn-primary" onClick={handleShow}>Write A review</Button>
          </div>

          {/*  cart */}
          <div className="mt-2 mb-5 d-flex justify-content-between flex-wrap">
            <Card style={{ width: "20rem" }} className="mb-3">
              <Card.Body>
                <Card.Title>AMandeep</Card.Title>
                <Card.Text style={{ color: "#f5d742" }}>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </Card.Text>
                <Card.Text style={{ color: "#f5d742" }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis, necessitatibus!
                </Card.Text>
                <Button variant="none">
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* for modals  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Write your review here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <div className="form_data">
                   <form>
                   <div className="form_input">
                        <label htmlFor="username">Your Name</label>
                        <input type="text" name="username" id="username" disabled />
                  </div>
                  <div className="form_input">
                        <label htmlFor="username">Give The Rating</label>
                        <Select options={options}  />
                 </div>
                 <Form.Group className="mb-3 mt-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"  name='description' rows={3}  />
                </Form.Group>

                    </form> 
             </div>
          </Modal.Body>
         
        </Modal>
      </div>
    </>
  );
};

export default ProductDetailsMain;
