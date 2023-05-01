import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Fun from './Fun'
import Class from './Class'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Fun/>

  {Fun()}
  



<hr/>
  
  
<Class/>

 <h2 style={{color:'red'}}> reusable of component</h2>
<Class/> 
<Class/>
<Class/>

  </>
  )
}

export default App
