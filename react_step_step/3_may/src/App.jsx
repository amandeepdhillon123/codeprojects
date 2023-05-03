import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pro from './Component/Props';
 import Cla from './Component/Class';
import Input from './Component/Input';
 import Toggle from './Component/Toggle';

function App() {

//   const[name,setName] = useState("aman")
 
//   function Apple(){

  
//   }

//   function Nam(){
  

//       setName("amandeep")
//   }

  return (
    <>
    {/* <Pro name={name} sur="Dhillon" address ={{city:"Delhi", pincode:12345}} fun = {Apple()}/> */}
    
 {/* <button onClick={Nam}>click me</button> */}

       {/* <button onClick={() => setName("jaat raaj")}>click me</button> */}
    
    <hr/>

    {/* <Cla  name={name}/>

     <button onClick={() => ("jaat raaj")}>click me</button> */}
    {/* <Input/> */}

    <Toggle/>
    
    </>
  )
    }

export default App
