import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Fun} from "./components/Fun"
import Class from './components/Class'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <h1>hello</h1>
     <Class/>
     <Fun/>
     </>
  )
}

export default App
