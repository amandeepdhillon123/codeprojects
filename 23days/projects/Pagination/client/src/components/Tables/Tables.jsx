import React from "react";
import "./table.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { Badge } from "react-bootstrap";
const Tables = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-2">
            <Card className="shadow ">
              <Table className="align-itmes-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>amandeep</td>
                    <td>aman@gmail.com</td>
                    <td>M</td>
                    <td className="d-flex align">
                      <Dropdown className="text-center">
                        <Dropdown.Toggle
                          className="dropdown_btn"
                          id="dropdown_basic">
                         <Badge bg="primary">Active<i class="fa-solid fa-angle-down"></i></Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className="img_parent">
                      <img src="https://w0.peakpx.com/wallpaper/639/974/HD-wallpaper-bhagat-singh-bhagatsingh-dom-domfighter-domwarrior-warrior-thumbnail.jpg" alt="" />
                    </td>

                    {/* action */}
                    <td>
                    <Dropdown className="text-center">
                        <Dropdown.Toggle
                        variant="light"
                          className="action"
                          id="dropdown_basic">
                         <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item ><i class="fa-solid fa-eye" style={{color:"green"}}></i> <span>View</span></Dropdown.Item>
                          <Dropdown.Item ><i class="fa-solid fa-pen-to-square" style={{color:"blue"}}></i> <span>Edit</span></Dropdown.Item>
                          <Dropdown.Item ><i class="fa-solid fa-trash" style={{color:"red"}}></i> <span>Delete</span></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Tables;
