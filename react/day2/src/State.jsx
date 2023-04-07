  import {useState} from "react"
function State(){
//   const [data,setData] = useState("ram")
  const [data,setData] = useState(0)
  function Apply(){

    // setData("ramshyam")
    setData(data+1)
    // alert(data)
  }
 
  return(
        <div>
       <h1>{data}</h1>
      <button onClick={Apply}>click</button>
        </div>
    )
}

export default State;