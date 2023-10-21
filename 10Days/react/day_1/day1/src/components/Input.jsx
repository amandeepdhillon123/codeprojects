
import React ,{useState} from "react"

function Input(){

    const [data,setdata] = useState(null)
    const [print,setPrint] = useState(false)
    function ram(value){
    // console.log(value.target.value)

    setdata(value.target.value)
    setPrint(false)
    }
    return(
        <>

        {
            print ? <h1>{data}</h1> : null
        }
       
        <input type="text" onChange={ram} />
       <button onClick={ ()=> setPrint(true)}>click</button>
        </>
    )
}

export default Input;