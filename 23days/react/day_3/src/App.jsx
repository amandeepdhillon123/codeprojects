import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Toggle from './components/Toggle'
import Form from './components/Form'
import Conditon from './components/Conditon'
import Validation from './components/Validation'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     {/* <Input/>
     <Toggle/> */}
     {/* <Form/> */}
     {/* <Conditon/> */}
     <Validation/>
     </>
  )
}

export default App
