import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Toggle from './components/Toggle'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Input/>
     <Toggle/>
     </>
  )
}

export default App
