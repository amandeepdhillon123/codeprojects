import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import { Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<CartDetails/>}/>

    </Routes>
    {/* <Home/> */}
    </>
  )
}

export default App
