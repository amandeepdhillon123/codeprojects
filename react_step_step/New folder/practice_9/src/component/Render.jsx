import React, { Component } from 'react'

export class Render extends Component {
  
    constructor(){
        super();
        console.log("consructor")

        this.state={
            name:"amandeep"
        }
    }
    render() {

        console.log("render method")
    return (
        <>
          <h2>{this.state.name}</h2>
         <h1>{this.props.name}</h1>
      <div>Render</div>

      <button onClick={()=> this.setState({name:"shyam"})}>update</button>
        
        </>
       
    )
  }
}

export default Render