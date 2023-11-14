import React from "react";
import "./table.scss";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
const AdminuserTable = () => {
  return (
    <>
      <div className="container">
        <h4>Users</h4>
        <Row>
          <div>
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>

                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>aman</td>
                    <td></td>

                    <td className="img_parent">
                      <img src="/192logo.png" alt="img" />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="light"
                          className="action"
                          id="dropdown-basic"
                        >
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <div>
                              <i
                                class="fa-solid fa-trash"
                                style={{ color: "red" }}
                              ></i>{" "}
                              <span>Delete</span>
                            </div>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
              {/* <Paginations
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    page={page}
                    pageCount={pageCount}
                    setPage={setPage}
                     /> */}
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default AdminuserTable;
