import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nested from './component/Nested'
import Reuse from './component/Reuse'
function App() {
  const[sur,surName]=useState("am")

  return (
  <>
{/* <Nested/> */}

<Reuse/>
  </>
  )
}

export default App
