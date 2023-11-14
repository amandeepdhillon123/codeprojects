import React from "react";
import { useState } from "react";
import "../../pages/Admin/admin.css";
import { NavLink } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
const AdminSidebar = ({children}) => {
  const [ isSidebarActive, setSidebarActive ] = useState(false);
   
  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
  return (
    <>
      <div className={`sidebar ${isSidebarActive ? 'active' : ""}`}>

        {/* sidebar */}
        <div className="logo-details">
          <i className="fa-solid fa-user"></i>
          <span className="logo_name"> amandeep</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/admin/dashboard" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addproducts">
              <i class="fa-solid fa-truck-fast"></i>
              <span className="links_name">Add Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addcategory">
              <i class="fa-solid fa-certificate"></i>
              <span className="links_name">Add category</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">
              <i class="fa-solid fa-certificate"></i>
              <span className="links_name">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">
              <i class="fa-solid fa-bag-shopping"></i>
              <span className="links_name">Orders</span>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-gear"></i>
              <span className="links_name">settings</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
                                <nav>
                                    <div className="sidebar-button">
                                        <i class="fa-solid fa-bars" onClick={toggleSidebar} ></i>
                                        <span className="dashboard">Dashboard</span>
                                    </div>
                                    <div className="search-box">
                                        <input type="text" placeholder="Search..." />
                                        <i className="bx bx-search"></i>
                                    </div>
                                    <div className="profile-details">
                                        
                                        <span className="admin_name">amandeep</span>
                                        <Dropdown className='text-center' >
                                            <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                            <img src="/192logo.png" alt="" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >
                                                    <i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;&nbsp;Logout
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </nav>

                                {/* inner content */}
                                <div className="home-content">
                                    {children}
                                </div>
        </section>
    </>
  );
};

export default AdminSidebar;
