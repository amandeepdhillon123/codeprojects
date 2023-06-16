import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import One from './component/One'
// import Two from './component/Two'
// import Three from './component/Three'
// import Four from './component/Four'
//  import Five from './component/Five'
// import Six from './component/Six'
  
import Seven from './component/Seven'
  import { Routes,Route } from 'react-router-dom'
  // import Eight from './component/Eight'

  import './App.css'
function App() {


return (
   <> 
   {/* <h1>hello ji  duniya</h1> */}
      {/* <One/> */}
      {/* <Two/> */}
      {/* <Three/> */}
      {/* <Four/> */}
        {/* <Five/> */}
        {/* <Six/> */}

           
        <Routes>
   <Route path="userview/:Id/:Fname/:Lname" element={<Seven/>}></Route>
        </Routes>

        {/* <Eight/> */}

      
   </>
  )
}

export default App
