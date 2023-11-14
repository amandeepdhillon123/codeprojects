import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const Checkout = () => {
  return (
    <>
     <div className='container'>
        <Card style={{ width: '22rem', border: "2px solid #32a897", marginTop: "5px" }}>
          <Card.Body>
            <Card.Title>Shipping Details</Card.Title>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Address:- </span> ewarxdcf bhjn
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>City:- </span>     jkjk
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>State:-</span>     cgjb 
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Country:-</span>     hbjk
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}> Mobile:-</span>    132134654
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>pincode:-</span>     65654
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>shipingPrice:-</span>    212
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>TotalPrice:-  </span>     ₹456
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card mt-3" style={{ border: "2px solid #32a897" }}>
          <Card.Title>Your Orders</Card.Title>
          
           
                
                  <div className= "mt-2 store-item bottom-line pb-3" >
                    <Row>
                      <Col lg={3}>
                        <img className="image-store" src="/logo192.png" alt="" />
                      </Col>
                      <Col lg={9}>
                        <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                          <h4> shoes</h4>

                        </div>
                        <div className="list-store d-flex align-items-center justify-content-between">
                          <p><span style={{ fontWeight: "bold" }}>  discount :- </span> 20%</p>
                        </div>
                        <div className="list-store d-flex align-items-center justify-content-between">
                          <p><span style={{ fontWeight: "bold" }}> Price :-</span> 54545</p>
                        </div>
                        <div className="list-store d-flex align-items-center justify-content-between">
                          <p><span style={{ fontWeight: "bold" }}> Delivery date :-</span>    dateAfter2Days</p>
                        </div>
                        <div className="list-store d-flex align-items-center justify-content-between">

                          <div className="d-flex">
                            <h5>Total :- 5496</h5>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <hr />
                
            
          
        </Card>
      </div>
    
    
    </>
  )
}

export default Checkout