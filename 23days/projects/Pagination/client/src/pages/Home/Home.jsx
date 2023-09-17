import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate= useNavigate();
  const adduser=()=>{
    navigate("/register")

  }
  return (
    <>
      <div className="container">
        <div className="main_div">
          {/*  search add button */}
          <div className="search_add mt-4 d-flex justify-content-between">
            {/*  serach */}
            <div className="search col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>
            {/* add user */}

            <div className="add_btn">
              <Button variant="primary" onClick={adduser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>
          {/* export,gender,status */}

          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            {/* export csv */}
            <div className="export_csv">
              <Button className="export_btn">Export To Csv</Button>
            </div>
            {/*filter By Gender  */}
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Gender</h3>
                <div className="gender d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name="gender"
                    value={"All"}
                    defaultChecked
                  />

                  <Form.Check
                    type={"radio"}
                    label={"Male"}
                    name="gender"
                    value={"Male"}
                  />

                  <Form.Check
                    type={"radio"}
                    label={"Female"}
                    name="gender"
                    value={"Female"}
                  />
                </div>
              </div>
            </div>

  {/* short By value  */}
            <div className="filter_newold">
              <h3> Short By value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown_basic">
                <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">New</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"> Old 
                  </Dropdown.Item>
                   
                 
                </Dropdown.Menu>
              </Dropdown>
            </div>

{/* filter by status  */}
           <div className="filer_status">
              <div className="status">
                 <h3> Filter By Status</h3>
                 <div className="status_radio d-flex justify-content-around flex-wrap">
                 <Form.Check
                    type={"radio"}
                    label={"All"}
                    name="status"
                    value={"All"}
                    defaultChecked
                  />

                  <Form.Check
                    type={"radio"}
                    label={"Active"}
                    name="status"
                    value={"Active"}
                  />

                  <Form.Check
                    type={"radio"}
                    label={"InActive"}
                    name="status"
                    value={"InActive"}
                  />
                 </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
