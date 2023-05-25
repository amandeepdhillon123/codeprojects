
 import React, { Component } from 'react'
 
 export class DidMount extends Component {
      
    constructor(){
        super();
        this.state={
            name:"amandeep"
        }

        console.log("constructor");
    }

    componentDidMount(){

        console.log("componentDId mount")
    }
    
    render() {
        console.log("render")
     return (
       <div>
        <h1>Component Did mount{this.state.name}</h1>
        <button onClick={()=> this.setState({name:"deep"})}>Update</button>
       </div>
     )
   }
 }
 
 export default DidMount