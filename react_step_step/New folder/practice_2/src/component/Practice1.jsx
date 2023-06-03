

import React from 'react'

import { useState } from 'react';

const Practice1 = () => {

    const[name,setName]= useState("Aman")
    const[num,setNum]= useState(0)
   
   
    function updataData(){

        setName("amandeep dhillon")
    }
    
    function incHandler(){

        setNum(num + 1)
    }
    
    function decHandler(){


          
        setNum(num - 1)
    
       
     
    }

  return (
  <>
      

      <h1>{name}</h1>

      <h1>{num}</h1>

      <button onClick={ updataData}> Click me </button>

      <button onClick={ incHandler}> Increase </button>

      <button onClick={ decHandler}> Decrease </button>
  
  
  
  </>
  )
}

export default Practice1;