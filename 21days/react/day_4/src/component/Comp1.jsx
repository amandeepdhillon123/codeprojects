import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { Route, Link, Routes } from "react-router-dom";
function Comp1() {
  return (
   <> 
         <Nav/>
      <Routes>
        

        <Route path="home" Component={Home} ></Route>
        <Route path="about" Component={About} > </Route>
      </Routes>
      </>
  
  );
}



export default Comp1;
