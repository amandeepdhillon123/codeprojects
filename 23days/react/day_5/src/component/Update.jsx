
import React, { Component } from 'react'

export class Update extends Component {
  constructor(){
    super();
    this.state={
        name:0
    }

    console.log("consrucgtor")
  }
  componentDidUpdate(preProps,preState){
    console.log("update method",preState)
  }

  render() {
    console.log("render method")

   
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=> this.setState({n:this.state.count+ 1})}>change</button>
      </div>
    )
  }
}

export default Update