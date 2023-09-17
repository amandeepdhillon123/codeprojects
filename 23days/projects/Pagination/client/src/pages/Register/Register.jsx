import React from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
// for form
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  Row  from "react-bootstrap/Row";
// selct tag
import Select from 'react-select';

const Register = () => {

    // react select 
    const options = [
      { value: 'Active', label: 'Active' },
      { value: 'InActive', label: 'InActive' },
 
    ];
  
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register Your Details</h2>
        <Card className="shadow mt-3 p-3">
          <div className="profile_div text-center">
            <img
              src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg"
              alt="bhagat_Singh_Image"
            />
          </div>
          <Form>
            <Row>
               {/* firstname  */}
            <Form.Group className="mb-3 col-lg-6"  controlId="formBasicEmail">
              <Form.Label>FirstName</Form.Label>
              <Form.Control type="text" placeholder="Enter FirstName" name="fname" />
              
            </Form.Group>
               {/* last name  */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text" placeholder="Enter LastName" name="lname" />
              
            </Form.Group>

            {/* email */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" name="email" />
              
            </Form.Group>
          {/*  mobile Number */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" name="lname" />
              
            </Form.Group>

            {/* selct your Gender */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Gender</Form.Label>

                  <Form.Check 
                type={"radio"}
                label={'Male'}
                name="gender"
                value={"Male"}
                />

<Form.Check 
                type={"radio"}
                label={'Female'}
                name="gender"
                value={"Female"}
                />
              
            </Form.Group>

            {/* select tag */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Select options={options}/>
              
            </Form.Group>
            {/* select your profile */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Slect Your Profile</Form.Label>
              <Form.Control type="file" placeholder="Select Your Profile" name="user_profile" />
              
            </Form.Group>

            {/* Enter Your location */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter Your Location</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Location" name="location" />
              
            </Form.Group>

           

            

            
            <Button variant="primary" type="submit">
              Submit
            </Button>
            </Row>
           
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
