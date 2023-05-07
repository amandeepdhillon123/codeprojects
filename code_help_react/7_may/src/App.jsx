import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './component/Item'
import Demo from './component/Demo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Demo>
    <Item/>
    </Demo>
     
    </>
  )
}

export default App
