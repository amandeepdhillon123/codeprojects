import React, { Component } from 'react'
import Student from './Student';
export class Unmount extends Component {
  
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
        this.state.show ?    <Student/>: <h1>chil removed</h1>
     }
   

<button onClick={()=> this.setState({show: !this.state.show})}>Toggle child compnent</button>
     
     
     </>
    )
  }
}

export default Unmount