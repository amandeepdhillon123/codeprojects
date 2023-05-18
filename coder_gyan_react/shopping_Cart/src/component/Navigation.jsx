import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const cartStyle={
    background:'#f59E0D',
    display:'flex',
    padding:'6px 12px',
    borderRadius:'50px'
   

  }
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img  className="ml-6 " style={{ height: 45 }} src="/public/images/logo.png" alt="log" />
        </Link>
        <ul className="flex item-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6 ">
            <Link to="/products">Products</Link>
          </li>
          <li  className="ml-6">
            <Link to="/cart">
              <div className="mr-6" style={cartStyle}>
                <span className="text-black">10</span>
                <img className="ml-2 "
                
                  src="/public/images/cart.png"
                  alt="cart-icon"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
