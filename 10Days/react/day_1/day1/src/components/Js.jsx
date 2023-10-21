
import React from "react"
function Ram(){
    // return(
    //     <>
    //     {/* {10* 20}
    //      */}

    //      <h1>hello world</h1>
    //     </>
    // )


    // without jsx 

    // return React.createElement("div",null,"Hello User")
    return React.createElement("div",null,React.createElement("h1",null,"hello user"))
}

export default  Ram;