
import React, { Component } from 'react'

export class DidUpdate extends Component {


    constructor(){
        super();

        this.state={
            name:0
        }

        console.log("constructor")

    }

    componentDidUpdate(preProps,preState,snapShopt){

        console.log("component did update",preState,preProps,snapShopt)
    }

  render() {

    console.log("render")
    return (
      <div>
   <h1>hello {this.state.name}</h1>
   <button onClick={()=> this.setState({name:this.state.name+1})}>Update</button>
    
    </div>
    )
  }
}

export default DidUpdate