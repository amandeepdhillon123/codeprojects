import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import "./order.scss"
const Orders = () => {
  return (
     <>
        <div className="container mb-3">
        <h3>Orders</h3>
        <Row>
          <div className="col mt-0">
            <Card className='shadow'>
              <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>totalPrice</th>
                    <th>orderItems</th>
                    <th>userId</th>
                    <th>&nbsp;&nbsp;&nbsp;Status</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                 
                          <tr>
                            <td>1</td>
                            <td>₹ &nbsp;56465</td>
                            <td>44</td>
                            <td>544</td>
                            <td>
                              
                                <Dropdown className=''>
                                  <Dropdown.Toggle id="dropdown-basic">
                                
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item >Confirm</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown> 
                               
                                  <Dropdown className=''>
                                    <Dropdown.Toggle id="dropdown-basic">
                                    
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item >Shipped</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown> 
                                  
                                    <Dropdown className=''>
                                      <Dropdown.Toggle id="dropdown-basic">
                                       
                                      </Dropdown.Toggle>
                                      <Dropdown.Menu>
                                        <Dropdown.Item >Delivered</Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown> 

                              </td>


                            <td>
                              <div>
                                <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                              </div>
                            </td>
                          </tr>
                        
                    


                </tbody>
              </Table>

            </Card>
          </div>
        </Row>

      </div>
     </>
  )
}

export default Orders