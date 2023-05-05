import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frm from './component/Form'
 import Logic from './component/Validation'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  {/* <Frm/> */}


    <Logic/>
   </>
  )
}

export default App
