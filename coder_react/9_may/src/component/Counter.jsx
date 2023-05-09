  import React from "react"

  import { useState } from "react"
function Counter(){
      

    const[number,setNumber]= useState(0)

    // let number =0;
      

    // function Increase(){
    //     setName(name +1)
    // }


    function Decrease(e){
        // setName(name - 1)

          e.stopPropagation(); 
        //  console.log(e)

        // setTimeout(() =>{
        //     // setNumber(number +1)

        //     setNumber(number =>number +1)
        // },2000)

        setNumber(number => number +1)
        setNumber(number => number +1)
        setNumber(number => number +1)
        
        
     

           

        console.log(number)
        
    }
   
    return(
        <>
          <h1>{number}</h1>
          <button onClick={ () => Increase()}>inc</button>
          {/* <button onClick={ () =>Increase()}>inc</button> */}
          <button onClick={Decrease}>Dec</button>
        </>
    )
}

export default Counter;