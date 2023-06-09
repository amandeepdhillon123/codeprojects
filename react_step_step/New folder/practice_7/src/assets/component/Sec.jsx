import React from 'react'
import Nav from './Nav';
import { Route,Routes } from 'react-router-dom';
function Sec() {
  return (
    <>

       <Nav/>
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
  

    </>
  )
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



export default Sec