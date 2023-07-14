import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'
import './Layout.css'
const Layout = () => {

    const[toggle,setTogle] = useState(true)

    function handletoggle(){
        setTogle(!toggle)
    }
  return (
    <div className="sidebar-section">
      <div className={ toggle ? "sidebar-toggle sidebar" :"sidebar"}>
        <div className="sidebar-toggle-icons">
           <p onClick={handletoggle}>
            {
                toggle ? 
                <AiOutlineDoubleLeft size ={30}/> :
                <AiOutlineDoubleRight size ={30}/>
            }
            
           </p>
        </div>
      </div>
      <div className="container">
     <Home/>
      </div>
    </div>
  );
};

export default Layout;
