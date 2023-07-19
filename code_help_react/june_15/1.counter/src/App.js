import React from 'react'
import { useState } from 'react'

function App() {

  const[num,setNum] = useState(0)

  function incHandler(){
    setNum(num + 1)
  }
  function decHandler(){
    setNum(num - 1)
  }
  function reset(){
    setNum(0)
  }

  return (

    
    <div className='bg-[#344151] w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10'>
     
    
        <div className='text-[#0398d4] font-medium text-3xl'>Increment && Decrement</div>
       
        <div className='flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
        {/* className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl */}
          
          <button onClick={incHandler} className='w-20 border-r-2 text-center border-[#bfbfbf] text-5xl'>+</button>
          <div className='flex items-center text-3xl'>{num}</div>
          <button onClick={decHandler} className='w-20 border-l-2 text-center border-[#bfbfbf] text-5xl'>-</button>
        </div>
        <div>
        {/* bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg */}
          <button onClick={reset} className='bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg'>reset</button>
        
        </div>

      </div>

  )
}

export default App