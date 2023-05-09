import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
  // import User from './User'
  // import Members from './Member'

  // import Constructor from './Constructor'
 import Render from './Render'
  function App() {
  const [name, setName] = React.useState("ram")
  

  // function getDta(){
  //   alert("hello dosto")
  // }
   
  return (
    <>
     
     {/* <h1> i am haeder</h1 > */}
{/* 
     <User  name={getDta}/> 
    <div>

    <Members  name={getDta}/>
    </div> */}

    {/* <Constructor/>
    
    <render */}
        <h1></h1>


        {/* for [props] */}
    {/* <Render name={name}/> */}

    {/* <button onClick={() => setName("shree_Ram")}>update Name</button> */}
   
     {/* for state  */}

     <Render name="amandeep"/>
    </>
  )
}

export default App
