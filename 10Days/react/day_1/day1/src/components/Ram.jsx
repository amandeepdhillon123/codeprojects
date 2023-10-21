import {useState} from "react"

function Ram({name,other,ram}){
//   console.log(props)
  const[data,setData] = useState("ram")
console.log(name)
    return (
        <>
        <h1>Hello : {name}</h1>
        <h2>{other.name}  {other.surName}</h2>
        <button onClick={()=>ram()}>click</button>
        </>
    )
}

export default Ram;