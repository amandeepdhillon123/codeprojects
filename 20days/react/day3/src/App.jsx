import "./App.css";
import { useState } from "react";
function App() {


  const[get,setData]= useState("")

  const[print,setPrint]= useState(false)
  function getData(e){
      setData(e.target.value)
      setPrint(false)
  }
  return (
    <div>
      {
        print ? <h1>
        {get}
          
        </h1> : null
      }
      
      <input type="text" onChange={getData}/>
      <button onClick={()=>setPrint(true)}>print</button>
    </div>
  );
}

export default App;
