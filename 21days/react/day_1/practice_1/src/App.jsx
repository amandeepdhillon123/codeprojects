import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pass from './component/Pass'
import Validation from './component/Validation'
// import Toggle from './component/Toggle'
// import Codition from './component/Codition'

// import Input from './component/Input'
// import PropF from './component/PropF'
// import { USTCL } from './component/USTCL'
// import USTATE from './component/USTATE'
// import Event from './component/Event'
// import JSX from './component/JSX'
// import { Class } from './component/Class'
// import Function from './component/Function'
function App(){
 // const [name,setName]=useState("amandeep")
 

 function name(){
  alert("hello ji")
 }
  return (
    <>
    <Pass name={name}/>
    {/* <Validation/> */}
    {/* <Toggle/> */}
  {/* //    <PropF name={name}  color="red"  /> */}
  {/* //     <button onClick={()=> setName("Dhillon shab")}>update</button> */}
    
    {/* <USTCL/> */}
  {/* <Function/> */}

{/* { Function()} */}

{/* <Class/> */}

{/* <JSX/> */}

{/* <Event/> */}

{/* <USTATE/> */}

  {/* <Input/> */}
  {/* <Codition/> */}
     </>
  )
}

export default App
