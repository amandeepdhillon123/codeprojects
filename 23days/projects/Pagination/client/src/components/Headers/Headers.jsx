import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
const Headers = () => {
    const navigate= useNavigate();

    const home=()=>{
       navigate("/")  
    }
  return (
    <>  
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={home} >Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>
  )
}

export default Headers