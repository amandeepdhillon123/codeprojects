import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  
import Function from './component/Function'
import Class from './component/Class'
import Jsx from './component/Jsw'
import Click from './component/Click'
import State from './component/UseState'
import Update from './component/ClassState'
function App() {
  

  return (
  <>
    <Function/>
    <Class/>
    <Jsx/>

    <Click/>

    <State/>

    <Update/>
  </>
  )
}

export default App
