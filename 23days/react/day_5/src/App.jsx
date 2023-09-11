import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Update from './component/Update'
import Should from './component/Should'
import Un from './component/Un'
function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <h1>compnent di update</h1>
     {/* <Update/> */}
     <Un/>
     {/* <Should/> */}
     </>
  )
}

export default App
