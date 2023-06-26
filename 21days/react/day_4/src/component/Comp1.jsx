import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function Comp1() {
  return (
    <Router>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About Page</Link>
      <Routes>
        

        <Route path="home" Component={Home} ></Route>
        <Route path="about" Component={About} > </Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>home Page</h1>
      <p>This is home page of website</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is About page of website</p>
    </div>
  );
}
export default Comp1;
