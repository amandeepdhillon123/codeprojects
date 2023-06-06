import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  import Construct from './component/constructor'
 import Render from './component/Render'
function App() {
  const[sur,surName]=useState("am")

  return (
   <>
   {/* <Construct surName="dhillon"/> */}
     <Render logic= {sur}/>
   </>
  )
}

export default App
