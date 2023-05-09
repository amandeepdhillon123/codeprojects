import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Obj from './Obj'

import Counter from './component/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
<div  onClick={() => console.log("amandeep")}>


  <Counter/>

  <Obj/>


  


</div>
  )
}

export default App
