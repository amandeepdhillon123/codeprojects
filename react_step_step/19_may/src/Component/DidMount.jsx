import React, { Component } from 'react'

export class DidMount extends Component {
  constructor(){
     super();

     this.state={
        name:"amandeep"
     }

    //  console.log("constructor")

  }
     
  componentDidMount(){
    console.log("didmount")
  }
  
    render() {

        console.log("render")
    return (
        <>
      <div>{this.state.name}</div>
      <button onClick={()=>(this.setState({name:"deep"}))}>update</button>
      </>
    )
  }
}

export default DidMount