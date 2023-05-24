import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Effect from './Effect'

import { createContext } from 'react'
import Con from './Context'
const data= createContext()
const data2= createContext()
function App() {

  // const name="amandeep dhillon";

  const obj={name:"amandeep", city:"xyz"}
   const email="sdfsjdfnksjdfnksj"
  return (
   <> 
   <data.Provider value={obj}>
    <data2.Provider value={email}>
    <Con/>
    </data2.Provider>
  
   </data.Provider>
   
   </>
  )
}

export default App

export {data};

export{data2}
