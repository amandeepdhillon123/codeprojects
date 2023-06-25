import React, { Component } from 'react'

export class CLASS extends Component {
    constructor(){
     super();

     this.state={
        name:"amandeep"
     }
        console.log("i am constructor ")
    }
  render() {

    console.log("i am render function")
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

export default CLASS