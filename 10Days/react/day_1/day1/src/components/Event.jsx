
function Event(){

    
    let data = "amandeep"
  function Ram(){
    let data ="ram"
    alert(data)
  }
    return (
        <>

        <h1>{data}</h1>
         {/* <button onClick={Ram}>click me</button> */}
         {/* <button onClick={Ram()}>click me</button> */}
         <button onClick={()=>Ram()}>click me</button>
        </>
    )
}

export default Event;