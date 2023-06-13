import React, { Component } from 'react'
import User from './User'
export class Will extends Component {
  
   constructor(){
       super();
       this.state={
        show:true
       }
   }
    render() {
    return (

        
      <div>
     {
        this.state.show ? 
        <User/> : <h1>child </h1>
     }
      <button onClick={()=> this.setState({show:!this.state.show})}>Toggle child</button>

      </div>
    )
  }
}

export default Will