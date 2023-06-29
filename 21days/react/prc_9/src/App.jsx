import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/home'
import About from './component/about'
import Help from './component/help'
import Page from './component/page'
import Support from './component/support'
import Main from './component/Main'
import {NavLink,Link,Routes,Route} from 'react-router-dom'
function App() {

  return (
   <> 
   <nav>
    <ul>
     <NavLink to='/'><li>home</li></NavLink>
     <NavLink  to='/about'><li>About</li></NavLink>    
     <NavLink  to='/help'><li>Help</li></NavLink>  
     <NavLink  to='/support'><li>Support</li></NavLink>  

    </ul>
   </nav>
    <Routes>
     <Route path='/' Component={Main}>
      <Route index element = {<Home/>}></Route>
     <Route path='/about' Component={About}></Route>
     <Route path='/help' Component={Help}></Route>
     <Route path='/support' Component={Support}></Route>
     <Route path='*' Component={Page}></Route>
     </Route>
   </Routes>
   </>
  )
}

export default App
