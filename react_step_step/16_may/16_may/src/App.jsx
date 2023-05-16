import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import { Component } from 'react'
// import Fun from './component/Function'
import Cla from './component/Class'
class App extends Component{
  
  constructor(){
    super();
    this.state={
      name:"jaat"
    }
  }
 ram(){

  //  alert("hello ji how are you")

  this.setState({name:"ram"})

  }

  render()
   {
    return (
      <>
        <h1>hello </h1>
  {/*       
        <Fun name="ram" 
         
         age ={24} address ={{vp:"dsh", sit: "dhdh"}}
          
         save={ram}
        
        >hello Dosto</Fun> */}
  
  
    <Cla  name={this.state.name}/> 
    <button onClick={()=>this.ram()}>update</button>
  
    
        
        
        
        
        
        
        
        
        
        
        
        </>
  
    )

   }
  
}

export default App
