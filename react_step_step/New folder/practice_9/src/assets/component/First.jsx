import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
 import Home from "../Pages/Home";
 import About from "../Pages/About";
function First() {
  return (
    <div>
      {/* <h1>Routing</h1> */}

      <Router>
        <Link to="/home">Home</Link> <br /> <br />
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </Router>


      {/* <Home/>
      <About/> */}
    </div>
  );
}


export default First;
