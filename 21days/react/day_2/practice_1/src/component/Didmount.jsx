import React, { Component } from 'react'

export class Didmount extends Component {
    constructor(){
        super();
    this.state={
        name:"amandeep"
    }
        console.log("constructor")
    }
    render() {
        console.log("render")
    return (
        <>
      <div>{this.state.name}</div>
      <button onClick={()=> this.setState({name:"deep"})}>update</button>
      </>
    )
  }
}

export default Didmount