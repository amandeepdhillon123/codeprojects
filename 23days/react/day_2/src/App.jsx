import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Click from './compnents/Click'
import State from './compnents/State'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    {/* <Click/> */}
    <State/>
     </>
  )
}

export default App
