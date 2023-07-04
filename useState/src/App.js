
// import React, { useState } from 'react'
// function App() {
//   const[num,setNum]=useState('')
//   function decrement(){
//         setNum(num - 1)
//      }
// function increment(){
//         setNum(num + 1)
//   }
//   function reset(){
//       setNum(0)
//   }
//  return (
//     <div  className="bg-[#344151] w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10">
//       <div  className="text-[#0398d4] font-medium text-3xl"> Increment && Decrement</div>
//       <div  className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
//         <button onClick={decrement} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"> - </button>
//         <div className="font-bold gap-12 text-4xl"> {num} </div>
//         <button onClick={increment} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"> + </button>
//       </div>
//       <div>
//         <button onClick={reset} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"> Reset </button>
//       </div>
//     </div>
//   )
// }

// export default App

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

 function resetHandler(){
 
  setNum(0)
}
  return (
    <div className='bg-[#344151] h-[100vh]  flex justify-center items-center flex-col gap-10'>
      {/* className="text-[#0398d4] font-medium text-3xl" */}
      
      <div className='text-[#0398d4] font-medium text-3xl'>Increment && Decrement</div>
      <div className='flex bg-white justify-center gap-16 py-8 rounded-sm text-[25px] text-[#344151]' >
      
      {/* className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" */}
        <button onClick={incHandler} className='border-r-2 text-center w-20 border-[green] text-5xl'> + </button>
        <div className='text-3xl m-auto'> {num} </div>
        <button onClick={decHandler} className='border-l-2 text-center w-20 border-[green] text-5xl'> - </button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-7 py-2 rounded-sm text-lg"> Reset </button>
    </div>
  )
}

export default App
