import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//  import Construct from './component/constructor'
//  import Render from './component/Render'
//  import Didmount from './component/Didmount'
// import Sholudmount from './component/Sholudmount'
// import Didupdate from './component/Didupdate'

// import Unmount from './component/Unmount'
//  import Effect from './component/Effect'
  import Array from './component/Array'

// import Efff from './component/Efff'
function App() {
  const[sur,surName]=useState("am")

  return (
   <>
   {/* <Construct surName="dhillon"/> */}
     {/* <Render logic= {sur}/> */}

     {/* <Didmount/> */}

     {/* <Didupdate/> */}

     {/* <Sholudmount/> */}

     {/* <Unmount/> */}

     {/* <Effect/> */}

     {/* <Eff/> */}

     {/* <Efff/> */}

     <Array/>
   </>
  )
}

export default App
