import React from "react";
import "./App.css";
import User from "./User";
import {BrowserRouter ,Link,Routes,Route} from 'react-router-dom'

function App() {
  let users=[
    {id:1, name:'anil', email:'anil@gmial.com'},
       {id:2, name:'sam', email:'sam@gmial.com'},
          {id:3, name:'peter', email:'peter@gmial.com'},
             {id:4, name:'bruce', email:'brucee@gmial.com'},
                {id:5, name:'tony', email:'tony@gmial.com'},
  ]
  return(
    <BrowserRouter>
    
    <h1>React Dynamic Routing</h1>
    {
   users.map((item)=>{
       return <div key={item.id}> <Link  to={'/user/' + item.id +"/" + item.name}>{item.name}</Link> </div>
   })
    }
    <Routes>
   <Route path="/user/:id/:name" Component={User}></Route>
    </Routes>
  </BrowserRouter>
  ) 
  
}

export default App;
