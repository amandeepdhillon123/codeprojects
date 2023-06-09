import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
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

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is Home PAge of website</p>
    </>
  );
}

function About() {
  return (
    <>
      <h1>About Page</h1>
      <p>This is About PAge of website</p>
    </>
  );
}
export default First;
