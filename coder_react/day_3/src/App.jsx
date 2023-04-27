import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
 import Fun from './component/Fun'
import PlayButton from './component/PlayButton'

import Video from './component/Video'

import Obj from './component/Obj'

function App() {
  

  return (
        <div>
          {/* <PlayButton  name="play"  msg="chlo "/>
          <PlayButton  name = "pause" msg ="rook jao"/> */}
           
           {/* <PlayButton msg="jai ram">Play</PlayButton>
           <PlayButton msg="jai ramshyam">Pause</PlayButton> */}

            {/* <Fun msg ="hello Duniya" onClick={()=> console.log("amandeep")}>Play</Fun>
            <Fun msg ="hello Duniya" onClick={()=> alert("amandeep")}>alert</Fun> */}

{/* 
                  <Fun msg ="hello Duniya" onRam={()=> console.log("amandeep")}>Play</Fun>
            <Fun msg ="hello Duniya" onRam={()=> alert("amandeep")}>alert</Fun> */}
       



{/* <Video  onClick={()=> alert("aman")}  onPause={()=> alert("Deep")}>Play</Video> */}
       
       
       
         
        <Obj/>
       
       
       
       
       
       
        </div>
  )
}

export default App
