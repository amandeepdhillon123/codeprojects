import React, { useState } from "react";


function App() {

  const[count,setCount]=useState(0)

  function decreaseHandler(){

    setCount(count-1)
  }
  function increaseHandler(){

    setCount(count+1)
  }
  return (
    <div className="bg-[#344151] w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10">
      
      <div className="text-[#0398d4] font-medium text-2xl" >Increment && Decrement</div>
      
      
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>
        <div className="font-bold gap-12 text-4xl"> {count} </div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"> + </button>
      </div>
      <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" onClick={()=> setCount(0)}> reset </button>
    </div>
  );
}

export default App;
