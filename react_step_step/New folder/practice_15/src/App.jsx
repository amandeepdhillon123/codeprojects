import React from "react";
import "./App.css";
import Nav from "./assets/Nav";
import Home from "./component/Home";
import About from "./component/About";
import {Routes ,Route } from "react-router-dom";
function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
    </Routes>
    </>
  ) 
  
}

export default App;
