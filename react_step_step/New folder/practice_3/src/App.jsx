import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './component/Input'


// import Student from './component/Student'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  {/* <Student name = "aman"/> */}

  <Input/>
   </>
  )
}

export default App
