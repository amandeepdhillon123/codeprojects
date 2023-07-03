import React, { Component } from 'react'

export class State extends Component {
    
    constructor(){
        super();
         this.state = {
          count: 0
         }
    }

     incHandler(){
    this.setState({count: this.state.count + 1}) 
    }

    decHandler(){
        this.setState({count: this.state.count - 1}) 
        }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.incHandler()}>inc</button>
        <button onClick={()=>this.decHandler()}>inc</button>
      </div>
    )
  }
}

export default State