import React, { Component } from 'react'

export class DidMount extends Component {
     constructor(){
        super();
   this.state={name:"amndeep"}
        console.log("constructor")
     }
     componentDidMount(){

        console.log("did mount")
     }
    
    render() {

        console.log("render")
    return (
      <div>

        <h1>{this.state.name}</h1>
        <button onClick={()=> this.setState({name:"ram"})}>update</button>
      </div>
    )
  }
}

export default DidMount