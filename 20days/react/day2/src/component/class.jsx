import React, { Component } from 'react'

export class Class extends Component {
  
    constructor(){
        super();
        this.state={
            // name:"amandeep"
            name:0
        }
    }

    apple(){
        this.setState({name: this.state.name 
        + 1})
    }
    render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=> this.apple()}>chnage</button>
      </div>
    )
  }
}

export default  Class