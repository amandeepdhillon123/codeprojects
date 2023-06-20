import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
 

  return (
     <div>
      <Router>
      <Nav/>
   <Routes>
    <Route path='/' element={<h1>hello</h1>}></Route>
    <Route path='/add' element={<h1>hello add product</h1>}></Route>
    <Route path='/update' element={<h1>hello product component</h1>}></Route>
    <Route path='/logout' element={<h1>hello update component</h1>}></Route>
    <Route path='/add' element={<h1>hello logout product</h1>}></Route>
    <Route path='/profile' element={<h1>hello profile compnent</h1>}></Route>
    <Route path='/signup' Component={SignUp}></Route>
   </Routes>
      </Router>

      <Footer/>
    
     </div>
  )
}

export default App
