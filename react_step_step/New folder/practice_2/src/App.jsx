import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice1 from './component/Practice1'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Practice1/>
   </>
  )
}

export default App
