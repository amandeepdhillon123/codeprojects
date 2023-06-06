import React, { Component } from 'react'

export class Didmount extends Component {
    
    constructor(){

        super();

        this.state={
            name:"amandeep"
        }

        console.log("i am constructor")
    }
  componentDidMount(){

    console.log("did mount")
  }
    render() 
    {

        console.log("render")
    return (
     <>
     <h1> hello</h1>
      <button onClick={()=> this.setState({name:"dhillon"})}>didmount</button> 
     </>
    )
  }
}

export default Didmount