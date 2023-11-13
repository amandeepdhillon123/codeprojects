import React from 'react'
import "./Header.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
        <header>
          <nav>
{/* --------->>>> for left part of header <<<<<--------------- */}
            <div className='left'>
                <div className='navlogo'>
                   <a href=""> <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" /></a>
                </div>
            </div>

{/*---------->>>>> for right part of header <<<<-------------*/}
            <div className='right'>
              {/* --------- hamburger ----- */}
              <div className='hamburgur' onClick={handleShow}>
                  <i class="fa-solid fa-bars"></i>
               </div>

              {/*  ----products---- */}
              <div className='nav_btn'>
                      <a href="">Products</a>
              </div>
              {/*  -----cart icon----- */}
               <div id='ex4' className='cartsicon'>
                  <a href="" className='text-dark'>
                    <span className='p1 fa-stack fa-2x has-badge' data-count ={0}>
                    <i className="p1 fa-solid fa-cart-shopping" />
                    </span>
                    
                  </a>
               </div>

               {/* profile */}

              <div>
               <Dropdown className='text-center'>
                  <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                    <img src="man.png" className='profile_img' style={{width:"50px"}} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <a href="" className='text-dark text-decoration-none'>
                        <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                        Profile
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1">
                      <a href="" className='text-dark text-decoration-none'>
                        <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                        Login
                      </a>
                    </Dropdown.Item>
                   
                  </Dropdown.Menu>
              </Dropdown>
               </div>
            </div>
          </nav>
              
              {/*--->>>> sidebar for responsive <<<-------*/}

        <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{background:"black"}}>
                
                {/*  products */}
              <a href="" className='text-light text-decoration-none'> 
              <i class="fa-solid fa-shop"></i>&nbsp;&nbsp;
              Products</a> <br />

                {/* login */}
              <a href="" className='text-light text-decoration-none'> 
              <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;
              login</a>

              {/* cart icon */}

              <div id='ex4' className='cartsicon'>
                  <a href="" className='text-light'>
                    <span className='p1 fa-stack fa-2x has-badge' data-count ={0}>
                    <i className="p1 fa-solid fa-cart-shopping" />
                    </span>
                    
                  </a>
               </div>
              </Offcanvas.Body>
      </Offcanvas>
        </header>
      </>
  )
}

export default Header