
import React from "react";
import { useState } from "react";
function Input(){
 
    //  const[data,setData] = useState(null)

    //  const[print,printData] = useState(false)
    // function getData(val){
    //     console.log(val.target.value)

    //     setData(val.target.value)
    //     printData(false)
    // }
    // return(
    //     <>

    //     {/* <h1> {data}</h1> */}

    //     {
    //        print ?
    //        <h1>{data}</h1>:null
    //     }
    //     <input type ="text" onChange={getData}/>
        
        
    //     <button onClick={()=> printData(false)}>Print data</button>
        
        
    //     </>
    // )

    const[data,setData] = useState(null)

    const[print,printData] = useState(false)
    function getData(val){

       console.log(val.target.value)

       setData (val.target.value)
    
       printData(false)


    }

    return(
        <>
          <h1>Imput Box data</h1>
{
    print? <h2>{data}</h2> : null
}
          

          <input type="text" onChange={getData} />

          <button onClick={()=> printData(true)}>printData</button>
        </>
    )
}

export default Input;