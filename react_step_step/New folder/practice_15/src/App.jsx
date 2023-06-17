import React from "react";
import "./App.css";
import Nav from "./assets/Nav";
import Home from "./component/Home";
import About from "./component/About";
import PageNot from "./component/PageNot";
import {Routes ,Route } from "react-router-dom";
function App() {
  return(
    <>
    <Nav/>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/about" Component={About}></Route>
      <Route path="*" Component={PageNot}></Route>
    </Routes>
    </>
  ) 
  
}

export default App;
