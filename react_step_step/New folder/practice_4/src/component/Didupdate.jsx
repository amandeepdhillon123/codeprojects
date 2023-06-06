import React, { Component } from 'react'

export class Didupdate extends Component {
  
    constructor(){

        super();
        this.state={
            // name:"deep"

            num: 0
        }

        console.log("contrcutor")
    }

   componentDidUpdate(preProps,preState,snapshot){

        console.log("did update",preState)
    }
    render() {

        console.log("render")
    return (
<>
   <h1>hello {this.state.num}</h1>

   {/* <button onClick={()=> this.setState({name:"Deep dhillon"})}>update</button> */}
   
   <button onClick={()=> this.setState({num:this.state.num + 1})}>update</button>






</>
    )
  }
}

export default Didupdate