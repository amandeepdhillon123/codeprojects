import React from "react";

const Click = () => {
    function Data(){
         name="amande"
         alert(name)
    }
  return(
    <>
     <h1>{name}</h1>
     {/* <button onClick={() => alert("ram")}>click me </button> */}
     
     {/* <button onClick={()=> Data()}>click</button> */}
     <button onClick={Data}>click me</button>
    </>
  )

 
};

export default Click;
