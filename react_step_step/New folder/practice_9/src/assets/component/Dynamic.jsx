import React from 'react'
import { BrowserRouter as Router, Link, Routes,Route } from 'react-router-dom'
import User from './User'
function Dynamic() {

    let users= [
        {id:1, name:'anil' , email :'anil@gamilc.com'},
        {id:2, name:'sam' , email :'anil@gamilc.com'},
        {id:3, name:'peter' , email :'anil@gamilc.com'},
        {id:4, name:'bruce' , email :'anil@gamilc.com'},
        {id:5, name:'tony' , email :'anil@gamilc.com'},
        {id:6, name:'aman' , email :'anil@gamilc.com'},
    
    
    
    ]
  return (
   <Router>

    <h1>Dynamic routing</h1>
    {
        users.map((item)=> 
      <Link to={"/users/" + item.id}><h3>{item.name}</h3></Link>  
        )
    }
  <Routes>
  <Route path='/users/:id' Component={User}> </Route>
  </Routes>
   
   </Router>

  )
}

export default Dynamic