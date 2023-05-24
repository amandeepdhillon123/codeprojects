
import React, { Component } from 'react'

export class Render extends Component {

   constructor(){

       super();
       this.state={
        name:"deepe"
       }

   }
  render() {

    console.log("render", this.state.name)
    return (
      <div>
      <h1>user componenent</h1>
      <button onClick={()=> this.setState({name:"jajaja"})}>update</button>

      </div>
    )
  }
}

export default Render