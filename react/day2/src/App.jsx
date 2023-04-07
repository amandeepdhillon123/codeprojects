import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Func from './Fun'
// import Class from '../Class'
import './App.css'
import With from './Without'
import State from './State'
import Student from './Student'

import Stateclass from './Stateclass'
// automatic called method 2
// alert("hello everyone")

function App() {
  const [count, setCount] = useState(0)
  // compnent inside a component 
  /*
  function Apple(){
     return(<div>hello world</div>)
  }
  */  
  // click event 

  let name="aman"

  function Apple(){
    //  alert("function called")

    name="ram "
    alert(name)
 }

  return (
    <div className="App">

    {/* <Func /> */}
    {/* <Class /> */}
    {/* {Apple()} */}

    {/* <With /> */}
    {/* automatic called method 1  */}
    {/* <button onClick={Apple()}>Click me</button>   */}

    {/* automatic called function method 3 */}
    {/* <button onClick={alert("hello alert function")}>Click me</button>  */}
   

    {/* called by button  */}
    {/* <button onClick={Apple}>Click me</button>
    <button onClick={alert}>Click me</button> */}

    {/* called by arr ow directly  */}
    {/* <h1>{name}</h1> */}
    {/* <button onClick={ () => alert("hello everyone")}>Click me</button> */}
    {/* <button onClick={ () => Apple()}>Click me</button> */}
     


     {/* <State />   */}

     {/* <Stateclass /> */}
     <Student />
    </div>
  )
}

export default App
