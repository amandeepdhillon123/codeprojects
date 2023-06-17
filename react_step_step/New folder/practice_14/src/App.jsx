import React from "react";
import "./App.css";
import { BrowserRouter as Router,Link , Route, Routes} from "react-router-dom";
function App() {
  return (<Router>
      <Link to="">Home</Link> <br />
      <Link to="/about">About</Link>
  <Routes>
  <Route path="" Component={Home}> </Route>
  <Route path="/about" Component={About}> </Route>
  </Routes>
      
 

  </Router>)
}

function Home(){
  return (
    <>
    <h1>  Home page </h1>
    <p>This is home page of oue website</p>
    </>
  )
}

function About(){
  return (
    <>
    <h1> About page </h1>
    <p>This is About page of oue website</p>
    </>
  )
}

export default App;
