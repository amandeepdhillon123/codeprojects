import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nested from './component/Nested'
// import Reuse from './component/Reuse'

// import Fragment from './component/Fragment'
import Parent from './component/Parent'
function App() {
  const[sur,surName]=useState("am")

  return (
  <>
{/* <Nested/> */}

{/* <Reuse/> */}

{/* <Fragment/> */}

  <Parent/>

  </>
  )
}

export default App
