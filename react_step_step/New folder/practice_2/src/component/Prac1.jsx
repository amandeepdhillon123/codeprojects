

import React, { Component } from 'react'

export class Prac1 extends Component {

    constructor(){

         super();
      
         this.state={name:"aman"}

         this.state={number: 0}
   
    }


  render() {
    return (
    <>
    <h1>{this.state.name}</h1>
    <h1>{this.state.number}</h1>
    <button onClick={() => this.setState({name:"amandeep Dhillon"})}>change</button>
   
   <button onClick={()=>{this.setState({number: this.state.number 
+ 1})}}>inc</button>


<button onClick={()=>{this.setState({number: this.state.number 
- 1})}}>dec</button>
    </>
    )
  }
}

export default Prac1