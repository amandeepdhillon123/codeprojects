import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APP from "./component/Construct"
import Render from './component/Render'
import Mount from "./component/DidMount"
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
   {/* <APP/> */}
   {/* <Render name="amandee"/> */}
   <Mount/>


     </>
  )
}

export default App
