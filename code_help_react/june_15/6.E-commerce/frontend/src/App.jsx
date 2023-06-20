import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
 

  return (
     <div>
      <Router>
      <Nav/>
      </Router>
     <h1>E-dashboard</h1>
     </div>
  )
}

export default App
