import React from 'react'
import {Routes,Route} from "react-router-dom"
import Params from './components/Params'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='user/:id/:fname/:lname' Component={Params}/>
      </Routes>
    </div>
  )
}

export default App