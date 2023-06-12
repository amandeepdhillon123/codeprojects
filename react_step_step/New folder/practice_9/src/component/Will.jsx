import React, { Component } from 'react'
import Student from './Student';
export class Will extends Component {
    constructor(){
         super();
         this.state={
             show:true
         }
    }
    render() {
    return (
      <>
     
      {
        this.state.show ? <Student/> : <h1>childe removed</h1>
      }
    <button onClick={()=> this.setState({show: !this.state.show})}>Toggle</button>
        
      </> 
    )
  }
}

export default Will