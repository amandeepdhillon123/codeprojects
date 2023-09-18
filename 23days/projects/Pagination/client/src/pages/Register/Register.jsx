import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
// for form
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// selct tag
import Select from "react-select";
// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spiner from "../../components/Spiner/Spiner"
// Api call
import {registerfunc} from "../../services/Apis"

import { useNavigate } from "react-router-dom";
import { addData } from "../../components/context/ContextProvider";
const Register = () => {
  const [showspin,setShowSpin] =useState(true)
  //  getdata input

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  // for status
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();
  
  const navigate= useNavigate();

  // usecontext 
  const {useradd, setUseradd} = useContext(addData);
  // react select
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // setInput values
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  // console.log(inputdata)

  // setsatatus

  const setStatusValue = (e) => {
    setStatus(e.value);

    // console.log(e.value)
  };

  // profile set

  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  //  submit user data
  const submitUserData = async(e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, gender, location } = inputdata;

    if (fname === "") {
      toast.error("First name is Required");
    } else if (lname === "") {
      toast.error("last name is Required");
    } else if (email === "") {
      toast.error("Email  is Required");
    } else if (!email.includes === "@") {
      toast.error("Enter Valid Email");
    } else if (mobile === "") {
      toast.error("Mobile is Required");
    } else if (mobile.length > 10) {
      toast.error("Enter Valoid Mobile");
    } else if (gender === "") {
      toast.error("Gender is required");
    } else if (status === "") {
      toast.error(" Status is required");
    } else if (image === "") {
      toast.error("Profile is required");
    } else if (location === "") {
      toast.error("location is required");
    } else {
      // toast.success("Registeration successful done !");
      console.log(image);

      const data = new FormData();
      data.append("fname",fname)
      data.append("lname",lname)
      data.append("email",email)
      data.append("mobile",mobile)
      data.append("gender",gender)
      data.append("status",status)
      data.append("user_profile",image)
      data.append("location",location)

      const config = {
        "Content-Type":"multipart/form-data"
      }

      const response = await registerfunc(data,config);
      // console.log(response)
       
      if(response.status === 200){
        setInputData({
          ...inputdata,
          fname:"",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          location: ""
        });
        setStatus("");
        setImage("");
        setUseradd(response.data)
        navigate("/");
      }else{
        toast.error("Error!")
      }

    }
  };

  // preview image

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
    setTimeout(()=>{
      setShowSpin(false)
   },1200)
  }, [image]);


  return (
    <>
    {
      showspin ? <Spiner/> : <div className="container">
      <h2 className="text-center mt-1">Register Your Details</h2>
      <Card className="shadow mt-3 p-3">
        <div className="profile_div text-center">
          <img
            src={
              preview
                ? preview
                : "https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg"
            }
            alt=""
          />
        </div>
        <Form>
          <Row>
            {/* firstname  */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter FirstName"
                name="fname"
                onChange={setInputValue}
                value={inputdata.fname}
              />
            </Form.Group>
            {/* last name  */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                name="lname"
                onChange={setInputValue}
                value={inputdata.lname}
              />
            </Form.Group>

            {/* email */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={setInputValue}
                value={inputdata.email}
              />
            </Form.Group>
            {/*  mobile Number */}
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile"
                name="mobile"
                onChange={setInputValue}
                value={inputdata.mobile}
              />
            </Form.Group>

            {/* selct your Gender */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Gender</Form.Label>

              <Form.Check
                type={"radio"}
                label={"Male"}
                name="gender"
                value={"Male"}
                onChange={setInputValue}
              />

              <Form.Check
                type={"radio"}
                label={"Female"}
                name="gender"
                value={"Female"}
                onChange={setInputValue}
              />
            </Form.Group>

            {/* mobile */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Status</Form.Label>
              <Select options={options} onChange={setStatusValue}/>
            </Form.Group>
            {/* select your profile */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Profile</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select Your Profile"
                name="user_profile"
                onChange={setProfile}
              />
            </Form.Group>

            {/* Enter Your location */}

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter Your Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Location"
                name="location"
                onChange={setInputValue}
                value={inputdata.location}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitUserData}>
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
      <ToastContainer position="top-right" theme="light" />
    </div>
    }
      
    </>
  );
};

export default Register;
