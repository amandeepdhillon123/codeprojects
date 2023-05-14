  

// alert("helo ji aap kasie ho ")
let Click =()=>{

    let data ="amandeep"

  function Data(){
        
    data="jaat raaj"

    alert(data)
  }

    return(
        <>
          <h1> hello i am click event </h1>  

          <h2>{data}</h2>
        {/* <button onClick={() =>alert("hello")}>click me</button> */}
       
          {/* <button onClick={Data}>click me</button> */}
          <button onClick={()=>Data()}>click Event</button>
        </>
    )


}

export default Click;