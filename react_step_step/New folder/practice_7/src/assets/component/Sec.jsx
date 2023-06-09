import React from 'react'
import Nav from './Nav';
import PageNot from '../Pages/PageNot';
import Home from '../Pages/Home';
import About from '../Pages/About';
import { Route,Routes } from 'react-router-dom';
function Sec() {
  return (
    <>

       <Nav/>
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="*" Component={PageNot}></Route>
        
        </Routes>
  

    </>
  )
}



  
 



export default Sec