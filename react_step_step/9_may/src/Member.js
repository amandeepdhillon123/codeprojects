import React  from "react";

// function User({name}){

    function Members(props){

    return(
        <>
   <h1>user copmonent</h1>

   {/* <button onClick={name}>click me</button> */}
   {/* <button onClick={props.name}>click me</button>  */}
   <button onClick={() =>props.name()}>click me</button>   
        

     </> )
}

export default Members;