import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Props from './Props'
function App() {
   let obj={ name:"amamndeep",surName:"dhillon"}

  return (
   <>
<Props obj={obj} number= "44" tru={true}  fun={console.log("jai ho sbki") } symbol="h" />

   
   </>
  )
}

export default App
